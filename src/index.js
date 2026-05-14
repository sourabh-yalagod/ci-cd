import { config } from "dotenv";
import express from "express";

config();

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "App is Healthy and healthy....!" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
