import { config } from "dotenv";
import express from "express";

config();

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "End to End CICD implemented.....!" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
