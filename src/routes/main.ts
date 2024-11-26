import express from "express";

const apiKey = process.env.OPENAI_API_KEY;

const router = express.Router();

router.post("/api", async (req, res) => {
  const { body } = req;
  if (!body) {
    res.status(400).send({ error: "Request body is required" });
    return;
  }
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    const json = await response.json();

    res.send(json);
  } catch (error: any) {
    if (!error.message) {
      throw new Error("Inference Error");
    }
    console.error(error);
    if (error?.message) res.status(500).send({ error: error?.message });
  }
});

export default router;
