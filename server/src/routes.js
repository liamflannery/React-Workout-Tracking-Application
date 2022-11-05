const express = require('express')

const program = require('./controllers/programs')
const days = require('./controllers/days')
const exercises = require('./controllers/exercises')
const users = require('./users')

const authenticateToken = require('./auth')

const router = express.Router()
 
router.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})


router.post('/api/user', users.insertUser)
router.post('/api/login', users.getUser)
router.get('/api/user/:id', authenticateToken, users.getUserDetail)

/* GET programs returns a list of all current programs */
router.get('/api/program', program.getPrograms)

router.get('/api/exercise', exercises.getExercises)

/* POST to programs creates a new program */
router.post('/api/program', program.createProgram)

/* GET a program returns the list of the last N programs */
// router.get('/api/program/:id', days.getDays)

/* POST to a program to create a new day */
router.post('/api/program/:id', days.createDay)

/* GET a day URL to get details of a day */
router.get('/api/program/:id', program.getProgram)
/*/* GET a days URL to get details of the days */
router.get('/api/day', days.getDays)
/* GET a day URL to get content of a workout day */
router.get('/api/day/:id', days.getDay)

router.put('/api/program/:id', program.updateProgram)

// /* DELETE to day URL to delete the day */
// router.delete('/api/program/:id/:dayid', days.deleteDay)


module.exports = router 
