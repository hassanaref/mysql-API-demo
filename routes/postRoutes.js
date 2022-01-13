const express = require("express");
const postRepo = require("../repositories/postRepositories")
const router = express.Router();

router
    .route("/")
    .get(postRepo.getAllPosts)
    .post(postRepo.createNewPosts);

router
    .route("/:id")
    .get(postRepo.getPostById);

module.exports = router;