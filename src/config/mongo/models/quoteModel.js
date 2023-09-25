const { model, Schema } = require('mongoose')

// creating schema
const quoteSchema = new Schema({
    name: {
        type: String
    },
    code: {
        type: String
    },
    date: {
        type: Date
    },
    image: {
        type: String
    },
    desiredQty: {
        type: Number
    },
    price: {
        type: Number
    },
    checked: {
        type: Boolean
    }
});

module.exports = model('quoteSchema', quoteSchema);