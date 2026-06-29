import React from "react";
import { useState } from "react";
import { reviewCode } from "../services/api";

// lista statica di linguaggi

const LANGUAGES = [
  "javascript",
  "typescript",
  "python",
  "java",
  "php",
  "css",
  "html",
  "sql",
];

const CodeEditor = (onReview, onLoading) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!code.trim()) {
      setError("Inserisci del codice da analizzare");
      return;
    }
    setError(null);
    onLoading(true);
    try {
      const data = await reviewCode(code, language);
      onReview(data.review);
    } catch (err) {
      setError("Errore durante la review. Riprova.");
    } finally {
      onLoading(false);
    }
  };

  const handleClear = () => {
    setCode("");
    setError(null);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Toolbar */}
        <div className="flex items-center justify-between">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          <button
            onClick={handleClear}
            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            Pulisci
          </button>
        </div>

        {/* Code textarea */}
        <div className="relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Incolla qui il tuo codice..."
            rows={20}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-4 text-sm text-gray-200 font-mono placeholder-gray-600 focus:outline-none focus:border-indigo-500 resize-none"
          />
        </div>

        {/* Error */}
        {error && <p className="text-red-400 text-sm">{error}</p>}

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Analizza codice
        </button>
      </div>
    </>
  );
};

export default CodeEditor;
