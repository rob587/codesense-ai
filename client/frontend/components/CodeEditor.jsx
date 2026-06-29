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

  return <div></div>;
};

export default CodeEditor;
