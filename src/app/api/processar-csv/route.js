// src/pages/api/processar-csv.js
import fs from 'fs';
import { stringify } from 'csv-stringify/sync';
import * as XLSX from 'xlsx';

export default function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, message: 'Método não permitido' });
    }

    const { headers, csvData, campoNome, campoNumero, colunasExcluir, keepFirstName } = req.body;

    if (!headers || !Array.isArray(headers) || headers.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Headers inválidos ou não fornecidos',
      });
    }

    if (!csvData || !Array.isArray(csvData) || csvData.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Dados CSV inválidos ou não fornecidos',
      });
    }

    const filteredHeaders = headers.filter((header) => header.trim() !== '');
    const filteredCsvData = csvData.map((row) =>
      filteredHeaders.reduce((acc, header, index) => {
        if (header) {
          acc[header] = row[header] || '';
        }
        return acc;
      }, {})
    );

    const processedData = processCsvData(
      filteredHeaders,
      filteredCsvData,
      campoNome,
      campoNumero,
      colunasExcluir,
      keepFirstName
    );

    if (processedData.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Nenhum dado válido processado. Verifique os dados de entrada.',
      });
    }

    const csvString = stringify(processedData, {
      header: true,
      columns: Object.keys(processedData[0]),
    });

    fs.writeFileSync('wizebot_contatos.csv', csvString);

    return res.status(200).json({
      success: true,
      message: 'Dados processados com sucesso',
    });
  } catch (error) {
    console.error('Erro ao processar CSV:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Erro interno ao processar os dados',
    });
  }
}

function processCsvData(headers, csvData, campoNome, campoNumero, colunasExcluirIndices, keepFirstName) {
  const processedHeaders = headers.map(header =>
    header.toLowerCase().replace(/[^a-z0-9]/g, '_')
  );

  const campoNumeroFormatado = campoNumero.toLowerCase().replace(/[^a-z0-9]/g, '_');
  const campoNomeFormatado = campoNome ? campoNome.toLowerCase().replace(/[^a-z0-9]/g, '_') : null;

  const indicesCampos = processedHeaders.reduce((acc, header, index) => {
    acc[header] = index;
    return acc;
  }, {});

  console.log('Indices de campos:', indicesCampos);

  if (!(campoNumeroFormatado in indicesCampos)) {
    throw new Error('Campo de número não encontrado no CSV.');
  }

  const campoNumeroIndex = indicesCampos[campoNumeroFormatado];
  const campoNomeIndex = campoNomeFormatado && campoNomeFormatado in indicesCampos ? indicesCampos[campoNomeFormatado] : null;

  const dados = csvData.map(row => {
    if (!row || typeof row !== 'object') {
      return null;
    }

    // Cria uma cópia da linha original para preservar dados adicionais
    const linhaOriginal = { ...row };

    let numero = row[campoNumero] ? String(row[campoNumero]).trim().replace(/\D/g, '') : '';
    console.log('Número extraído antes de validação:', numero);

    if (!numero) {
      console.log('Linha removida por número vazio:', row);
      return null;
    }

    if (!numero.startsWith('55')) {
      numero = '55' + numero;
    }

    if (numero.length < 12 || numero.length > 13) {
      console.log('Número removido por ser muito curto ou longo:', numero);
      return null;
    }

    const ddd = numero.slice(2, 4);
    const positionAfterDdd = 4;

    if (parseInt(ddd, 10) > 30) {
      if (numero.length === 13 && numero.charAt(positionAfterDdd) === '9') {
        numero = numero.slice(0, positionAfterDdd) + numero.slice(positionAfterDdd + 1);
      }
    } else {
      if (numero.length === 12) {
        numero = numero.slice(0, positionAfterDdd) + '9' + numero.slice(positionAfterDdd);
      }
    }

    const linhaDados = {
      phone_number: numero
    };

    if (campoNomeIndex !== null) {
      let nome = row[campoNome]?.trim() || '';
      if (keepFirstName && nome) {
        nome = nome.split(' ')[0];
      }
      linhaDados.name = nome;
    }

    // Adiciona todas as colunas dinâmicas à linha de saída, exceto phone_number e name
    Object.keys(linhaOriginal).forEach(campo => {
      if (!['phone_number', campoNumeroFormatado, 'name', campoNomeFormatado].includes(campo)) {
        linhaDados[campo] = linhaOriginal[campo];
      }
    });

    return linhaDados;
  }).filter(Boolean);

  return dados;
}
