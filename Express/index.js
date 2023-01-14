import express from "express";

const app = express();
// app.use((req, res) => {
//   console.log("Got a new request");
//   res.send("Hi, this is a response");
//   res.send({ color: "red" });
//   res.send("<h1>Heeeeellloooooo</h1>");
// });
app.get("/cats", (req, res) => {
  res.send("Meaw");
});
app.post("/cats", (req, res) => {
  res.send("Just posted to /cats");
});
app.get("/dogs", (req, res) => {
  res.send("HAf");
});
app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/:subredit/:post", (req, res) => {
  const { subredit } = req.params;
  console.log(req.params);
  res.send(`This is a subreddit about ${subredit}`);
});
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("nothing found if nothing searched");
  }
  console.log(req.query);
  res.send(`This is results for ${q}`);
});
app.get("*", (req, res) => {
  res.send("404");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
