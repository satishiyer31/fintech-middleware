const express = require('express');

require('dotenv').config();
const api = require('./routes/index.js');
const cors = require('cors');

const {google}= require("googleapis");

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(cors({
//   origin:['https://z3nsatishiyer2.zendesk.com/','https://z3nsatish-itdemo.zendesk.com/','https://z3nsatish-hrdemo.zendesk.com/']
// }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get('/', async(req,res)=> {
  res.send("Satish's Fintech Middleware POC");

})



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);