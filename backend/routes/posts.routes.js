isAuthenticated = require("../middleware/authValidator");
const Post = require("../controllers/post.controller.js");

module.exports = function (app) {
  app.get("/api/posts", isAuthenticated, Post.findAllPosts);

  app.get("/api/post/:id", isAuthenticated, Post.findPost);

  app.post("/api/post", isAuthenticated, Post.addPost);

  app.post("/api/post/:id/comment", isAuthenticated, Post.addComment);

  app.post("/api/post/:id/clap", isAuthenticated, Post.addClap);

  app.delete("/api/post/:id", isAuthenticated, isAdmin, Post.removePost);
};
