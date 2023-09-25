const { model, Schema } = require('mongoose')

// creating schema
const quoteSchema = new Schema({
    name: {
        type: String
    },
    date: {
        type: Date
    },
    image: {
        type: String
    },
    user: {
        name: {
            type: String
        },
    },
    price: {
        type: Number
    },
});

module.exports = model('quoteSchema', quoteSchema);