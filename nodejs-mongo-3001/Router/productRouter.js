const express = require('express')
const router = express.Router()
const { createProduct, createManyProducts, getProductById, updateProduct, deleteProduct, updatePrice } = require('../Controller/productController')

// GET
router.get('/:productCode', getProductById)

// POST
router.post('/create', createProduct)
router.post('/createmany', createManyProducts)

// PUT
router.put('/update/:productCode', updateProduct)
router.put('/updateprice/:productCode', updatePrice)

// DELETE
router.delete('/delete/:productCode', deleteProduct)

module.exports = router
