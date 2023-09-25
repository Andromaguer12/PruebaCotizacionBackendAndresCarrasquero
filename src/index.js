const express  = require('express');
const cors = require('cors');
const { AllEndPoints } = require('./routes/endpoints.index')
const morgan = require('morgan')
const dotenv = require('dotenv')
const configs = require('./config/configs')
const initConnection = require('./config/mongo/mongooseConnection')

const executeServer = () => {
  const app = express();

  // applying middlewares
  dotenv.config();
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: false }));
  app.use(
    cors({
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    }),
  );
  app.use(express.json());

  // routes
  AllEndPoints.forEach((ep) => {
    app.use(ep.rootUrl, ep.module);
  });

  // connection to mongodb data base
  const URI = configs().MONGODB.URI;
  console.log(URI)
  initConnection(URI);

  // execute port
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`BackendPruebaCotizaciones server is running in port: ${PORT}`);
  });
};

executeServer();