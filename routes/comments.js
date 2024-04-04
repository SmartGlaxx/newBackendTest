const router = require('express').Router()
const {getAllCommentsController, postCommentController, updateCommentController, 
	deleteCommentController} = require('../controllers/comments')


//GET ALL COMMENTS
router.get('/:id', getAllCommentsController)
//CREATE A COMMENT
router.post('/:id/:userId/:username', postCommentController)
//UPDATE A COMMENT
router.patch('/:postId/:commentId', updateCommentController)
//DELETE A COMMENT
router.delete('/:postId/:commentId', deleteCommentController)

module.exports = router