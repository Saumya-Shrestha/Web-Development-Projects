import express from "express";

const router = express.Router();

let posts = [];

router.get("/", (req, res) => {
  res.render("index", {
    posts,
    title: "Home",
  });
});

router.get("/create", (req, res) => {
  res.render("create", {
    title: "Create a New Post",
  });
});

router.post("/create", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.redirect("/");
});

router.get("/edit/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (post) {
    res.render("edit", {
      post,
      title: "Edit Post",
    });
  } else {
    res.status(404).send("Post not found");
  }
});

router.post("/edit/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect("/");
  } else {
    res.status(404).send("Post not found");
  }
});

router.get("/delete/:id", (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
  }
  res.redirect("/");
});

export default router;
