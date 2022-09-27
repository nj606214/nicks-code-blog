const express = require('express')
const router = express.Router()
const {getPosts, setPost, updatePost, deletePost} = require('../controllers/postController')

router.route('/').get(getPosts).post(setPost)
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