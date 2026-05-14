import { config } from "dotenv";
import express from "express";

config();

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "App is Healthy...!" });
});

const port = process.env.PORT || 3000;

app.listen(prompt, () => {
  console.log(`http://localhost:${port}`);
});
