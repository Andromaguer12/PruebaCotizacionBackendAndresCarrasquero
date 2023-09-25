'use strict'

const { asyncHandler } = require('../../shared/async-handler')
const quotesRepository = require('../../shared/repositories/quotes-repository')

// POST /api/create-quote
const createQuotesController = asyncHandler(async (req, res) => {
    const { 
        name,
        date,
        image,
        user,
        price,
    } = req.body

    const createQuote = await quotesRepository.createQuote(
        name,
        date,
        image,
        user,
        price,
    )

    res.status(200).json(createQuote)
})

module.exports = createQuotesController