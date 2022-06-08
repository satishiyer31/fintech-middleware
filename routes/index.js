const express = require('express')

const finOffersRouter = require('./offers.js')
const AccountRouter= require('./accounts.js')

const app = express();

app.use('/getOffers', finOffersRouter)
app.use('/getAccounts',AccountRouter)

module.exports = app;