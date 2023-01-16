import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import data from "./data.json" assert { type: "json" };

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

console.log(data);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/r/:subredit", (req, res) => {
  const { subredit } = req.params;
  const redditData = data[subredit];
  console.log(redditData);
  if (redditData) {
    res.render("subredit", { ...redditData });
  } else {
    res.render("notfound", { subredit });
  }
});
app.get("/random", (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  res.render("random", { number: number });
});
app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Stephanie", "Winston"];
  res.render("cats", { cats: cats });
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
