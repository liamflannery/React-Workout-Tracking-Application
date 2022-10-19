const models = require('../models')
const auth = require('./auth')

const createDay = async (request, response) => {

    const creator = await auth.validUser(request)

    if (creator) {
        const text = request.body.text
        const cid = request.params.id
        // check that this is a valid program

        const program = await models.Program.findOne({_id: cid})

        if (program) {

            const day = new models.Day({creator, program: program._id, text})
            const returned = await day.save()

            if (returned) {
                response.json({status: "success", id: returned._id})
            } else {
                response.json({status: "error"})
            }
        } else {
            response.sendStatus(404)
        }
    } else {
        response.sendStatus(401)
    }
}


const getDays = async (request, response) => {

    const user = await auth.validUser(request)

    if (user) {
        const id = request.params.id
        const days = await models.Day.find({program: id})
                .populate('creator')
                .sort('timestamp')
        response.json({days})
    } else {
        response.sendStatus(401)
    }
}

const getDay = async (request, response) => {

    const user = await auth.validUser(request)

    if (user) { 
        const msgid = request.params.msgid
        const result = await models.Day.findById(msgid).populate('creator')
        response.json(result)
    } else {
        response.sendStatus(401)
    }

}

const deleteDay = async (request, response) => {

    const user = await auth.validUser(request)

    if (user) { 
        const msgid = request.params.msgid
        const day = await models.Day.findOne({_id: msgid})
        if (day.creator.toString() === user.toString()) {
            const result = await models.Day.deleteOne({_id: msgid})
            if (result.acknowledged) {
                response.json({status: 'success'})
            } else {
                response.json({'status': 'unable to delete day'})
                response.sentStatus(400) // not quite the right status but will do
            }
        } else {
            // not authorised to delete 
            response.json({status: 'not authorised'})
            response.sendStatus(401)
        }
    } else {
            // not authorised to delete 
            response.json({status: 'not authorised'})
            response.sendStatus(401)
    }

}

module.exports = {
    createDay, 
    getDays,
    getDay, 
    deleteDay
}