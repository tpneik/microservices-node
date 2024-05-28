const express = require('express')
const router = express.Router()
const { createReview, updateReview, getAllReivew } = require('../Controller/reviewController')
router.get('/', (req, res)=>{
    res.send({ hello: "Hello" })
})
router.get('/getallreview', getAllReivew)

router.post('/create', createReview)

router.put('/update/:reviewId', updateReview)

module.exports = router