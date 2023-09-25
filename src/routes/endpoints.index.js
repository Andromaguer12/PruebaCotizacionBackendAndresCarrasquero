const { createProductController, getProductsController } = require('../controllers/products-controllers')

const {createQuotesController , getQuotesController} = require('../controllers/quotes-controller')

const AllRoutes = require('../constants/routes/constants') 

const AllEndPoints = [
  {
    routeId: 'get-quotes',
    rootUrl: AllRoutes.getQuotes,
    module: getQuotesController
  },
  {
    routeId: 'create-quote',
    rootUrl: AllRoutes.createQuote,
    module: createQuotesController
  },
  {
    routeId: 'create-product',
    rootUrl: AllRoutes.createProduct,
    module: createProductController
  },
  {
    routeId: 'get-products',
    rootUrl: AllRoutes.createProduct,
    module: getProductsController
  },
];

module.exports = {
    AllEndPoints
}