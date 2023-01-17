import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import methodOverride from "method-override";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let comments = [
  {
    id: uuidv4(),
    username: "Todd",
    comment: "lol so funny",
  },
  {
    id: uuidv4(),
    username: "Skyler",
    comment: "I like birdwatching with my dog",
  },
  {
    id: uuidv4(),
    username: "Sk8erBoi",
    comment: "Delete your account, Todd",
  },
  {
    id: uuidv4(),
    username: "onlysaywoof",
    comment: "woof woof woof",
  },
];

// get all comments
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
  // res.end(JSON.stringify(comments));
});
// MAKE A NEW COMMENT
//get content to create new comment
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});
// submit new comment to all commets
app.post("/comments", (req, res) => {
  console.log(req.body);
  const { username, comment } = req.body;
  comments.push({ username: username, comment: comment, id: uuidv4() });
  res.redirect("/comments");
});
//get a specific comment
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((comment) => comment.id === id);
  res.render("comments/detail", { comment });
});
// CHANGE A COMMENT
// submit a changed comment
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((comment) => comment.id === id);
  const newCommentText = req.body.comment;
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});
//get a form to change a comment
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((comment) => comment.id === id);
  console.log(foundComment);
  res.render("comments/edit", { comment: foundComment });
});

//delete a comment
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((comment) => comment.id !== id);
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// GET /comments - list all comments
// POST /comments - create a new comment
// GET /comments/:id - get one comment (using id)
// PATCH /comments/:id - update comment
// DELETE /comments/:id
