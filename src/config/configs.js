const express = require('express')
const app = express();

const isDev = app.get('env') === 'development';

const configs = () => ({
  jwtSecret: process.env.JWT_SECRET || 'token',
  MONGODB: {
    URI: isDev ? (process.env.MONGO_DB_LOCAL) : (process.env.MONGO_DB_PROD),
    USER: process.env.MONGO_USER || '',
    PASSWORD: process.env.MONGO_PASSWORD || '',
    CURRENT_VALIDATED_DOMAIN: isDev
      ? (process.env.LOCAL_REQUEST_VALIDATOR)
      : (process.env.PROD_REQUEST_VALIDATOR),
  },
});

module.exports = configs;