const Product = require('../Model/product')
const mongoose = require('mongoose')
module.exports = {
	createProduct: createProduct,
	createManyProducts: createManyProducts,
	getProductById: getProductById,
	updateProduct: updateProduct,
	deleteProduct: deleteProduct,
	updatePrice: updatePrice,
}

async function createProduct(req, res) {
	try {
		console.log(`[3001] Someone is calling createProduct`)
		const newProduct = new Product(req.body)
		console.log(`[3001] ${newProduct}`)
		const savedProduct = await newProduct.save()
		console.log(`[3001] Calling createReview successfully`)
		res.status(200).json({ status: "Done adding product!" });
	} catch (err) {
		if (err.name === 'ValidationError') {
			console.log(`[3001] Calling createOrder failed`)
			const errors = Object.values(err.errors).map(error => error.message);
			return res.status(400).json({ errors });
		}
	}
}

async function createManyProducts(req, res) {
	try {
		console.log(`[3001] Someone is calling createManyProducts`)
		const productData = req.body.products;
		console.log(`[3001] ${productData}`)
		const savedProducts = await Product.insertMany(productData);
		console.log(`[3001] Calling createManyProducts successfully`)
		res.status(201).json(savedProducts);
	} catch (err) {
		if (err.name === 'ValidationError') {
			console.log(`[3001] Calling createManyProducts failed`)
			const errors = Object.values(err.errors).map(error => error.message);
			return res.status(400).json({ errors });
		}
	}
}

async function getProductById(req, res) {
	try {
		console.log(`[3001] Someone is calling getProductById-`)
		const identifier = req.params.productCode
		let product;
		if (mongoose.Types.ObjectId.isValid(identifier)) {
			product = await Product.findById(identifier);
		} else {
			product = await Product.findOne({ productCode: identifier });
		}
		if (!product) {
			console.log(`[3001] No product corresponding matching!`)
			return res.status(404).json({ error: 'No product corresponding matching!' });
		}
		console.log(`[3001] Calling getProductById successfully`)
		res.status(200).json({ status: "Done", func: "getProductById", data: product });
	} catch {
		console.log(`[3001] Calling getProductById failed`)
		return res.status(400).json({ errors });
	}
}

async function updateProduct(req, res) {
	try {
		console.log(`[3001] Someone is calling updateProduct`)
		const productCode = req.params.productCode
		let product = await Product.findOne({ productCode });
		if (!product) {
			console.log(`[3001] No product corresponding matching!`)
			return res.status(500).json({ error: 'Không tìm thấy sản phẩm để cập nhật!' });
		}
		Object.assign(product, req.body);
		const validationError = product.validateSync();
		if (validationError) {
			console.log(`[3001] UpdateProduct validation failed!`)
			return res.status(400).json({ error: validationError.message });
		}
		const updatedProduct = await product.save();
		console.log(`[3001] Calling updateProduct successfully`)
		res.status(200).json({ status: "Done", func: "updateProduct", data: updatedProduct });
	} catch (error) {
		console.log(`[3001] Calling updateProduct failed`)
		res.status(500).json({ error: error.message });
	}
}

async function updatePrice(req, res) {
	try {
		console.log(`[3001] Someone is calling updatePrice`)
		const productCode = req.params.productCode
		let product = await Product.findOne({ productCode });
		if (!product) {
			console.log(`[3001] No product corresponding matching!`)
			return res.status(404).json({ error: 'No product to update' });
		}
		product.price = req.body.newprice
		const validationError = product.validateSync();
		if (validationError) {
			console.log(`[3001] UpdatePrice validation failed!`)
			return res.status(400).json({ error: validationError.message });
		}
		const updatedProduct = await product.save();
		console.log(`[3001] Update ${req.params.productCode} price to ${product.price} successfully`)
		res.status(200).json({ status: "Done", func: "updateProduct", data: updatedProduct });
	} catch (error) {
		console.log(`[3001] Calling updatePrice failed`)
		res.status(500).json({ error: error.message });
	}
}

async function deleteProduct(req, res) {
	try {
		console.log(`[3001] Someone is calling deleteProduct`)
		const productCode = req.params.productCode
		const isDeleteSuccess = await Product.findOneAndDelete({ productCode })
		if (!isDeleteSuccess) {
			console.log(`[3001] No product corresponding matching to delete!`)
			res.status(400).json({ error: 'No product to delete!' })
		}
		console.log(`[3001] Delelet product ${req.params.productCode} successfully`)
		res.status(200).json({ status: "Done", func: "updateProduct", message: "Done delete!" })
	} catch (error) {
		console.log(`[3001] Calling deleteProduct failed`)
		res.status(500).json({ error: error.message });
	}
}

