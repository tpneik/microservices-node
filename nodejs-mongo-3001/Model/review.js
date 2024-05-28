const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    productCode: {
        type: String,
        ref: 'Product',
        required: true,
        validate: {
            validator: async function (value) {
                const product = await mongoose.model('Product').findOne({ productCode: value });
                return !!product; // Return true if product with this code exists
            },
            message: 'Product with this code does not exist'
        }
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    reviewText: {
        type: String,
        maxlength: 500
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review