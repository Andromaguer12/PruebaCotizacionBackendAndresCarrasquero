'use strict'

const { asyncHandler } = require('../../shared/async-handler')
const quotesRepository = require('../../shared/repositories/quotes-repository')

// GET /api/get-quotes
const getQuotesController = async (req, res) => {
    // const quotes = await quotesRepository.getQuotes()

    // if(quotes.length === 0) {
    //     res.status(404)
    //     throw new Error('There are no quotes to show')
    // }

    res.status(200).json( [
        {
            "_id": "615196bd1616d9ac4f91d27a",
            "name": "Quote #1",
            "date": 1671951600,
            "image": "",
            "user": {
                "_id": "3541658464565",
                "name": "Andres Carrasquero"
            },
            "price": 4000
        },
        {
            "_id": "615196bd1616d9ac4f91d27b",
            "name": "Quote #2",
            "date": 1671951601,
            "image": "",
            "user": {
                "_id": "3541658464566",
                "name": "Maria Rodriguez"
            },
            "price": 5000
        },
        {
            "_id": "615196bd1616d9ac4f91d27c",
            "name": "Quote #3",
            "date": 1671951602,
            "image": "",
            "user": {
                "_id": "3541658464567",
                "name": "Carlos Perez"
            },
            "price": 6000
        },
        {
            "_id": "615196bd1616d9ac4f91d27d",
            "name": "Quote #4",
            "date": 1671951603,
            "image": "",
            "user": {
                "_id": "3541658464568",
                "name": "Laura Gomez"
            },
            "price": 7000
        },
        {
            "_id": "615196bd1616d9ac4f91d27e",
            "name": "Quote #5",
            "date": 1671951604,
            "image": "",
            "user": {
                "_id": "3541658464569",
                "name": "Juan Martinez"
            },
            "price": 8000
        }
    ])
}

module.exports = getQuotesController