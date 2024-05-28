const express = require('express')
const router = express.Router()
const { createOrder, getAllOrder } = require('../Controller/orderServiceController')

router.get('/', (req, res)=>{
    res.status(200).json({ hello: "Helooooo"});
})
router.get('/getall', getAllOrder)

router.post('/create', createOrder)

module.exports = router