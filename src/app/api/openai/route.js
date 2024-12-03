import 'dotenv/config';
import OpenAI from 'openai';

// Criação da instância do cliente OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Certifique-se de que sua chave está correta no .env
});

// Função para gerar uma resposta a partir de um prompt
async function generateOpenAiResponse(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // Substitua pelo modelo desejado, por exemplo, "gpt-3.5-turbo"
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
    });

    // Retorna a resposta gerada
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error("Erro ao comunicar com a OpenAI:", error.message);
    throw new Error("Erro na comunicação com a OpenAI");
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ success: false, message: 'Prompt não fornecido' });
  }

  try {
    const responseMessage = await generateOpenAiResponse(prompt);
    res.status(200).json({ success: true, message: responseMessage });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao gerar resposta da OpenAI' });
  }
}
