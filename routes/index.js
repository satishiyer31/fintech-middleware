const express = require('express')

const finOffersRouter = require('./offers.js')
const AccountRouter= require('./accounts.js')
const AccountRouterHeader = require('./accountsheader.js')

const app = express();

app.use('/getOffers', finOffersRouter)
app.use('/getAccounts',AccountRouter)
app.use('/getAccounts2',AccountRouterHeader)

module.exports = app;