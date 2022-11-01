const express = require('express')
require('express-async-errors')
const morgan = require('morgan')
const cors = require('cors')

require('dotenv').config()

const router = require('./routes')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/', router)

const port = process.env.PORT
// starting the server
app.listen(port, () => {
    console.log('listening on port ' + port);
  });

module.exports = app