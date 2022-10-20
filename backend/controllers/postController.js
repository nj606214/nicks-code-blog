const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')


//Set post
//route: POST /api/posts/id
//access: Private
const setPost = asyncHandler(async (req, res) => {

    const post = await Post.create({
        title: req.body.title,
        flaire: req.body.flaire,
        postText: req.body.text,
        fireLevel: req.body.fireLevel,
    })

    console.log(post)

    res.status(200).json(post)
})


//here is where we set up the functions that run the api calls
//route GET /api/goals
//access Private
const getPosts = asyncHandler(async (req, res) => {
    const posts =  await Post.find()
    res.status(200).json(posts)
})


//Update goal
//route PUT /api/goals
//access Private
const updatePost = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body 
        const result = await Post.findByIdAndUpdate(id, updates)
        res.send(result);
    }

    catch(err) {
        console.log(err)
    }
    res.status(200).json({message:`Update blog posts ${req.params.id}`})
})
  

//route GET /api/goals/id
//access Private
const deletePost = asyncHandler(async (req, res) => {
    const id = req.params.id;
    Post.findByIdAndDelete(id)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err)
    })
    res.status(200).json({message:`Delete blog posts ${req.params.id}`})
})

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost
}