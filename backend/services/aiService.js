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


Restituisci SOLO questo JSON, senza markdown, senza testo aggiuntivo, senza spiegazioni:
{
  "qualityScore": <numero da 1 a 10>,
  "summary": "<descrizione breve>",
  "bugs": [{"severity": "<critical|warning|info>", "line": "<riga o N/A>", "description": "<problema>", "fix": "<soluzione>"}],
  "performance": [{"description": "<problema>", "fix": "<soluzione>"}],
  "bestPractices": [{"description": "<problema>", "fix": "<soluzione>"}],
  "refactoring": [{"description": "<suggerimento>", "example": "<codice>"}],
  "positives": ["<punto positivo>"]
}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
    max_tokens: 800,
  });

  const content = completion.choices[0].message.content;
  const clean = content.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
};
