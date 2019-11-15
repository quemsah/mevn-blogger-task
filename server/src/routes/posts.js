const express = require("express");
const router = express.Router();
const Post = require("../models/post-model");

router.post("/api/posts", (req, res) => {
  const post = new Post({
    title: req.body.title,
    categories: req.body.categories,
    content: req.body.content
  });
  console.log(post);
  post.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        success: true,
        message: `Post with ID_${data._id} saved successfully!`
      });
    }
  });
});

router.get("/api/posts", (req, res) => {
  Post.find({}, "title categories content", (err, posts) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send({
        posts: posts
      });
    }
  }).sort({
    _id: -1
  });
});

router.get("/api/posts/:id", (req, res) => {
  Post.findById(req.params.id, "title categories content", (err, post) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(post);
    }
  });
});

router.put("/api/posts/:id", (req, res) => {
  Post.findById(req.params.id, "title categories content", (err, post) => {
    if (err) {
      console.log(err);
    } else {
      if (req.body.title) {
        post.title = req.body.title;
      }
      if (req.body.categories) {
        post.categories = req.body.categories;
      }
      if (req.body.content) {
        post.content = req.body.content;
      }
      post.save(err => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    }
  });
});

router.delete("/api/posts/:id", (req, res) => {
  Post.remove(
    {
      _id: req.params.id
    },
    err => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

module.exports = router;
