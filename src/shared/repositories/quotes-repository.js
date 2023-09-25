const Quote = require('../../config/mongo/models/quoteModel')

function saveQuote(quote) {
    return quote.save()
}
 
function createQuote(
    name,
    date,
    image,
    user,
    price,
) {
    const newProduct = new Quote({
        name,
        date,
        image,
        user,
        price,
    })

    return saveProduct(newProduct)
}

function getQuotes() {
    return Quote.find()
}

module.exports = {
    saveQuote,
    createQuote,
    getQuotes
}