const express = require('express')

const finOffersRouter = require('./offers.js')

const app = express();

app.use('/getOffers', finOffersRouter)

module.exports = app;