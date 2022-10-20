const express = require('express')
const router = express.Router()
const {getPosts, setPost, updatePost, deletePost} = require('../controllers/postController')

//this tells which url route to use when a post and get request is made
router.route('/').get(getPosts).post(setPost)
//this tells which url route to use when a delete or put request is made
router.route('/:id').delete(deletePost).put(updatePost)


/*this above accomplishes the same as whats below since
there are only two routes we can stack the methods ontop
of the route*/

/*
router.get('/', getPosts)

router.post('/', setPost)

router.put('/:id', updatePost)

router.delete('/:id', deletePost)
*/

module.exports = router