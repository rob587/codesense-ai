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

  return <div></div>;
};

export default CodeEditor;
