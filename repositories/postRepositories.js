const post = require("../models/Post");
const moment = require("moment");

const getAllPosts  = async (req,res,next) => {
    const [allPosts, _] = await post.getAll();
    let momentDate;
    for(let i=0; i < allPosts.length ; i++){
        momentDate = moment(allPosts[i].created_at);
        allPosts[i].created_at = momentDate.format('l');
    };
    console.log(allPosts);
    res.json(allPosts);
};

const createNewPosts = async (req,res,next) => {
    const newPost = new post(req.body.title, req.body.subject);
    const savedPost = await newPost.save();
    console.log(savedPost);
    res.send('post created');
};

const getPostById = async (req,res,next) => {
    const [onePost, _] = await post.getOne(req.params.id);
    const momentDate = moment(onePost[0].created_at);
    onePost[0].created_at = momentDate.format('l');
    res.json(onePost);
};

module.exports = {getAllPosts, createNewPosts, getPostById};