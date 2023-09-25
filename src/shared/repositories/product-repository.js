const Product = require('../../config/mongo/models/productModel')

function saveProduct(product) {
    return product.save()
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
    const newProduct = new Product({
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

function getProducts() {
    return Product.find()
}

module.exports = {
    saveProduct,
    createProduct,
    getProducts
}