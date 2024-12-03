import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const filePath = path.join(process.cwd(), 'processed_numbers.csv');
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Disposition', 'attachment; filename=processed_numbers.csv');
    res.setHeader('Content-Type', 'text/csv');
    fs.createReadStream(filePath).pipe(res).on('error', (err) => {
      console.error('Erro ao enviar o arquivo:', err);
      res.status(500).json({ success: false, message: 'Erro ao enviar o arquivo.' });
    });
  } else {
    res.status(404).json({ success: false, message: 'Arquivo não encontrado.' });
  }
}
