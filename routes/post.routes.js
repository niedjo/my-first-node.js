const express = require('express');
const { setPosts, getPost, editPost, delePost, likePost, disLikePost } = require('../controllers/post.controller');
const router = express.Router();

// receive data
router.get("/", getPost)

// send data
router.post("/", setPosts)

// udpade data
router.put("/:id", editPost)

// delete data
router.delete("/:id", delePost)

// like data
router.patch("/like-post/:id", likePost)

// like data
router.patch("/dislike-post/:id", disLikePost)




module.exports = router