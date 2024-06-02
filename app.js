const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const port = 8000
const route = require("./routes/routes")
require("./config/db")

app.use(session({
  secret: 'api_protal',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/api', route)
app.listen(port, () => {
  console.log('Listening on port ' + port)
})

