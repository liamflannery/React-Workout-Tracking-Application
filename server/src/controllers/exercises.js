const fs = require('fs')
let rawdata = fs.readFileSync('server/src/data/exercises.json')
let exercises = JSON.parse(rawdata);





//returns all exercises
const getExercises = async (request, response) => {
    
    response.json({exercises})

}


module.exports = { 
    getExercises
}