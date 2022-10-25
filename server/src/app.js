const express = require('express')
require('express-async-errors')
const morgan = require('morgan')
const cors = require('cors')

const router = require('./routes')
const config = require('./config')




const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
  credentials: true,
  origin: config.corsClientDomain
}))



app.use('/', router)



module.exports = app