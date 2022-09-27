const asyncHandler = require('express-async-handler')


//here is where we set up the functions that run the api calls
//route GET /api/goals
//access Private
const getPosts = asyncHandler((req, res) => {
    res.status(200).json({message: 'Get Goals'})
})

//Set goal
//route: POST /api/goals/id
//access: Private
const setPost = asyncHandler((req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:'Set blog post'})
})

//Update goal
//route PUT /api/goals
//access Private
const updatePost = asyncHandler((req, res) => {
    res.status(200).json({message:`Update blog posts ${req.params.id}`})
})
 

//route GET /api/goals/id
//access Private
const deletePost = asyncHandler((req, res) => {
    res.status(200).json({message:`Delete blog posts ${req.params.id}`})
})

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost
}