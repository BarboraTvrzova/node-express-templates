import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/r/:subredit", (req, res) => {
  const { subredit } = req.params;
  res.render("subredit", { subredit: subredit });
});
app.get("/random", (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  res.render("random", { number: number });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
