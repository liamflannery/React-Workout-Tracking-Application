const auth = require('./auth')
const models = require('../models')


const createProgram = async (request, response) => {

    const creator = await auth.validUser(request)

    if (creator) {
        const title = request.body.title
        const program = new models.Program({creator, title})
        const returned = await program.save()

        if (returned) {
            response.json({status: "success", id: program._id, days: 0})
        } else {
            response.json({status: "error"})
        }
    } else {
        response.sendStatus(401)
    }
}


const getPrograms = async (request, response) => {

    const user = await auth.validUser(request)

    if (user) {
        const programs = await models.Program.find({})
                                          .populate('days')
        response.json({programs})
    } else {
        response.sendStatus(401)
    }

}

module.exports = { 
    createProgram, 
    getPrograms
}