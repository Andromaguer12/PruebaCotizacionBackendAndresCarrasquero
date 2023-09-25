'use strict'

const { asyncHandler } = require('../../shared/async-handler')
const productsRepository = require('../../shared/repositories/products-repository')

// GET /api/get-products
const getProductsController = asyncHandler(async (req, res) => {
    const products = await productsRepository.getProducts()

    if(products.length === 0) {
        res.status(404)
        throw new Error('There are no products to show')
    }

    res.status(200).json(products)
})

module.exports = getProductsController