'use strict'

const { asyncHandler } = require('../../shared/async-handler')
const quotesRepository = require('../../shared/repositories/quotes-repository')

// GET /api/get-quotes
const getQuotesController = asyncHandler(async (req, res) => {
    const quotes = await quotesRepository.getQuotes()

    if(quotes.length === 0) {
        res.status(404)
        throw new Error('There are no quotes to show')
    }

    res.status(200).json(quotes)
})

module.exports = getQuotesController