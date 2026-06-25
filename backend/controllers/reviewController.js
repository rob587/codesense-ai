export const reviewCode = async (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Il codice è obbligatorio" });
    }

    if (!language) {
      return res.status(400).json({ error: "Il linguaggio è obbligatorio" });
    }

    const review = await generateCodeReview(code, language);

    res.json({
      success: true,
      review,
    });
  } catch (error) {
    console.error("ERRORE:", error);
    res.status(500).json({ error: error.message });
  }
};
