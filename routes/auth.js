const router = require('express').Router()
const {registerUser, verifyEmail, loginUser} = require('../controllers/auth')


router.post('/register', registerUser)

router.patch('/verifyemail/:id/:username', verifyEmail)

router.post('/login', loginUser)

module.exports = router

