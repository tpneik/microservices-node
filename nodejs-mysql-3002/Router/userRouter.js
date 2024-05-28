const express = require('express')
const router = express.Router()
const { createUser, getUserById, getAllUsers } = require('../Controller/userController')

// GET
router.get('/', ()=>{
    console.log('Hello LOG')
})
router.get('/getUserId/:userId', getUserById)
router.get('/getAllUser', getAllUsers)

// POST 
router.post('/create', createUser)

module.exports = router