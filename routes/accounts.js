const accounts = require('express').Router()
const {SPREADSHEET_ID} = process.env

const {google} = require('googleapis')

const auth = new google.auth.GoogleAuth({
    keyFile: "google-credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
})

const spreadsheetId = SPREADSHEET_ID

accounts.get('/:email', async(req,res)=> {

    const client = await auth.getClient();

    //Instance of API
    const googleSheets = google.sheets({version: "v4", auth: client });
      
    const getRows = await googleSheets.spreadsheets.values.get({
      
        auth,
        spreadsheetId,
        range: "Accounts",
      });
      const rows = getRows.data.values;
      const filteredRows =[];
      for (const row of rows) {
        if ((row[0]) == req.params.email) {
            filteredRows.push(row)
        }
    }

    res.json(filteredRows);

    //   console.log(getRows.data.values[1][1])
    //   res.json(getRows.data.values);


})

module.exports = accounts