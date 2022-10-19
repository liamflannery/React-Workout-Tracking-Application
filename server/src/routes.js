const express = require('express')
const auth = require('./controllers/auth')
const conv = require('./controllers/programs')
const days = require('./controllers/days')

const router = express.Router()
 
router.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

router.post('/auth/register', auth.createSession)

router.get('/auth/', auth.getUser)

/* GET programs returns a list of all current programs */
router.get('/api/program', conv.getPrograms)

/* POST to programs creates a new program */
router.post('/api/program', conv.createProgram)

/* GET a program returns the list of the last N programs */
router.get('/api/program/:id', days.getDays)

/* POST to a program to create a new day */
router.post('/api/program/:id', days.createDay)

/* GET a day URL to get details of a day */
router.get('/api/program/:id/:dayid', days.getDay)

/* DELETE to day URL to delete the day */
router.delete('/api/program/:id/:dayid', days.deleteDay)


module.exports = router 