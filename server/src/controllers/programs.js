const fs = require('fs')
let rawdata = fs.readFileSync('server/src/data/programs.json')
let programs = JSON.parse(rawdata);



const createProgram = async (request, response) => {
    const title = request.body.title
    const program = new models.Program({title})
    const returned = await program.save()

    if (returned) {
        response.json({status: "success", id: program._id, days: 0})
    } else {
        response.json({status: "error"})
    }

}


const getPrograms = async (request, response) => {
    
    response.json({programs})

}

const getProgram = async (request, res) => {
    const id = Number(request.params.id)
    
    const program = programs.programs.filter(p => p.id === id)
    // return a 404 if there is no such unit
    if (program) {
      res.json(program)
    } else {
      res.status(404)
      res.send("<h1>Program not found.</h1>")
    }
    

}

const updateProgram = async(request, res) => {
    const id = Number(request.params.id)
    
    const program = programs.programs.filter(p => p.id === id)
    // return a 404 if there is no such unit
    if (program) {
    //   program.days = request.params.days
      console.log(request.body)
      res.status(204)
    } else {
      res.status(404)
      res.send("<h1>Program not found.</h1>")
    }
}

module.exports = { 
    createProgram, 
    getPrograms,
    getProgram,
    updateProgram
}