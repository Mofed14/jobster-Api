const express = require('express')
const router = express.Router()
const { register, login, updateUser } = require('../controllers/auth')
const auth = require('../middleware/authentication')

const rateLimiter = require('express-rate-limit')

const apiLimit = rateLimiter({
    windowMs: 1000 * 60 * 15,
    max: 10,
    message: {
        msg: 'Too many requests from this IP, please try again after 15 minutes'
    }
})
router.post('/register', apiLimit, register)
router.post('/login', apiLimit, login)
router.put('/update', auth, updateUser)

module.exports = router
