const { find } = require('../Model/product')
const Review = require('../Model/review')
const mongoose = require('mongoose')
const { isUserExist } = require('../Model/validate')
module.exports ={
    createReview: createReview,
    updateReview: updateReview,
    getAllReivew: getAllReivew
}

async function createReview(req, res){
    try {
        console.log(`[3001] Someone is calling createReview--${req.body.userId}`)
        if(!(await isUserExist(req.body.userId))){
            console.log(`Calling createReview failed`)
            return res.status(400).json({ message: "No user corresponding to create review!" });
        }
        const newReview = new Review(req.body)
        console.log(newReview)
        const saveReview = await newReview.save()
        console.log(`[3001] Calling createReview successfully`)
        res.status(200).json({status: "Done creating review"})
    } catch (err) {
        if (err.name === 'ValidationError') {
			console.log(`[3001] Calling createOrder failed`)
            const errors = Object.values(err.errors).map(error => error.message);
			return res.status(400).json({ errors });
		}   
    }
}

async function updateReview(req, res){
    try {
        const reviewId = req.params.reviewId
        let review = await Review.findById(reviewId)
        if (!review){
            res.status(404).json({ error: 'No review corresponding to update' });
        }
        review.reviewText = req.body.newRreviewText
        const validationError = review.validateSync();
        if (validationError) {
			res.status(400).json({ error: validationError.message });
		}
        const updatedReview = await review.save();
		res.status(200).json({ status: "Done", func: "updateProduct", data: updatedReview });
    } catch (error) {
        res.status(500).json({ error: error.message });       
    }
}

async function getAllReivew(req, res){
    try {
        const review = Review.find()
        if(!review){
            res.status(404).json({ error: 'No review corresponding to update' });
        }   
        res.status(200).json(review)
    } catch (error) {
        res.status(500).json({ error: error.message });       
    }
}