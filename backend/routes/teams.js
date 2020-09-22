const express = require("express");
const Post = require("../models/team");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", checkAuth,  (req, res, next) => {
    const post = new Post({
      team: req.body.team,
      score: req.body.score,
      fname: req.body.fname,
      sname: req.body.sname
    });
    console.log(post);
    post.save().then(createdPost => {
      console.log(createdPost);
      res.status(201).json({
        message: "Post added successfully",
        postId: createdPost._id
      });
    });
  });
  
  router.get("", checkAuth, (req, res, next) => {
    Post.find().then(documents => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        teams: documents
      });
    });
  });
  
  router.delete("/:id", checkAuth, (req, res, next) => {
    Post.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "Post deleted!" });
    });
  });

  module.exports = router;
  