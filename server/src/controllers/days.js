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

const getDays = async (request, response) => {
    
    response.json({days})

}

module.exports = {
    createDay, getDays
}