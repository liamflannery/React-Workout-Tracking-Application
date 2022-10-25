

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



module.exports = {
    createDay
}