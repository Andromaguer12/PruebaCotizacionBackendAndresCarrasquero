const Quote = require('../../config/mongo/models/quoteModel')

function saveProduct(quote) {
    return quote.save()
}
 
function createProduct(
    name,
    code,
    date,
    image,
    desiredQty,
    price,
    checked,
) {
    const newProduct = new Quote({
        name,
        code,
        date,
        image,
        desiredQty,
        price,
        checked,
    })

    return saveProduct(newProduct)
}

function getQuotes() {
    return Quote.find()
}

module.exports = {
    saveProduct,
    createProduct,
    getQuotes
}