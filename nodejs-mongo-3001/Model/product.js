const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	productCode: { type: String, unique: true, required: true },
	name: { type: String },
	description: String,
	price: { type: Number },
	images: [String],
	category: Number,
	sizes: [String],
	colors: [String],
	stock: Number,
	brand: String,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;