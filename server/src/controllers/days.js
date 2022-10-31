const fs = require('fs')
let rawdata = fs.readFileSync('server/src/data/days.json')
let days = JSON.parse(rawdata);


const createDay = async (request, response) => {

  
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

const getDays= async (request, response) => {
    response.json({days})
}

const getDay = async (request, res) => {
    const id = Number(request.params.id)
    
    const day = days.days.filter(p => p.id === id)
    console.log(day)
    // return a 404 if there is no such unit
    if (day) {
      res.json(day)
    } else {
      res.status(404)
      res.send("<h1>Day not found.</h1>")
    }
    

}








module.exports = {
    createDay, getDays, getDay
}