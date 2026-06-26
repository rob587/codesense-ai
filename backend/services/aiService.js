import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateCodeReview = async (code, language) => {
  const prompt = `
Sei un Senior Developer con 10 anni di esperienza. Analizza questo codice ${language} e restituisci SOLO un JSON valido, senza markdown, senza testo aggiuntivo.

CODICE DA ANALIZZARE:
\`\`\`${language}
${code}
\`\`\`

Restituisci SOLO questo JSON:
{
  "qualityScore": <numero da 1 a 10>,
  "summary": "<breve descrizione generale del codice>",
  "bugs": [
    {
      "severity": "<critical|warning|info>",
      "line": "<numero riga o 'N/A'>",
      "description": "<descrizione del bug>",
      "fix": "<come fixarlo>"
    }
  ],
  "performance": [
    {
      "description": "<problema di performance>",
      "fix": "<come migliorarlo>"
    }
  ],
  "bestPractices": [
    {
      "description": "<best practice violata>",
      "fix": "<come correggerla>"
    }
  ],
  "refactoring": [
    {
      "description": "<suggerimento di refactoring>",
      "example": "<esempio di codice migliorato>"
    }
  ],
  "positives": [
    "<cosa è fatto bene nel codice>"
  ]
}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
    max_tokens: 2000,
  });
};
