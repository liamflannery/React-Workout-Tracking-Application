const fs = require('fs')
let rawdata = fs.readFileSync('server/src/data/exercises.json')
let exercises = JSON.parse(rawdata);


/*
const createExercise = async (request, response) => {
    const title = request.body.title
    const exercise = new models.Program({title})
    const returned = await program.save()

    if (returned) {
        response.json({status: "success", id: exercise._id, days: 0})
    } else {
        response.json({status: "error"})
    }

}

const createExercise = async (request, response) => {

  
    const text = request.body.text
    const cid = request.params.id

    const day = new models.Day({cid, text})
    const returned = await day.save()

    if (returned) {
        response.json({status: "success", id: returned._id})
    } else {
        response.json({status: "error"})
    }

}

*/

const getExercises = async (request, response) => {
    
    response.json({exercises})

}

const getExercise = async (request, res) => {
    const id = Number(request.params.id)
    
    const exercise = exercises.exercises.filter(p => p.id === id)
    console.log(exercise)
    // return a 404 if there is no such unit
    if (exercise) {
      res.json(exercise)
    } else {
      res.status(404)
      res.send("<h1>Exercise not found.</h1>")
    }
    

}

module.exports = { 
    getExercises,
    getExercise
}