const express = require('express')
const router = express.Router()
const { register, login, updateUser } = require('../controllers/auth')
const auth = require('../middleware/authentication')
router.post('/register', register)
router.post('/login', login)
router.put('/update', auth, updateUser)

module.exports = router
