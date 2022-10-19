const mongoose = require('mongoose')
const config = require('../config')

const sessionSchema = new mongoose.Schema({
    username: {type: String, unique: true}
  })

sessionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = document._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Session = mongoose.model('Session', sessionSchema)

const programSchema = new mongoose.Schema({
    title: String,
    creator: {type: mongoose.Types.ObjectId, ref: 'Session'}
  },
  {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
  })

programSchema.virtual('days', {
    ref: 'Day', // The model to use
    localField: '_id', // Find days where `localField`
    foreignField: 'program', // is equal to `foreignField`
    count: true // And only get the number of docs
  });

programSchema.methods.toJSON = function () {
    const cObj = this.toObject()
    cObj.id = cObj._id.toString()
    delete cObj._id
    delete cObj.__v
    return cObj
}

const Program = mongoose.model('Program', programSchema)

const daySchema = new mongoose.Schema({
    text: String,
    timestamp: {type: Date, default: Date.now},
    creator: {type: mongoose.Types.ObjectId, ref: 'Session'},
    program: {type: mongoose.Types.ObjectId, ref: 'Program'}
  })

daySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = document._id.toString()

    if (document.creator) {
      returnedObject.creator = document.creator.username
    }

    delete returnedObject._id
    delete returnedObject.__v
  }
})


const Day = mongoose.model('Day', daySchema)

const initDB = async () => {
    await mongoose
        .connect(config.mongoDBUrl)
        .catch((error) => {    
            console.log('error connecting to MongoDB:', error.day)  
        })
    }

module.exports = { Session, Program, Day, initDB }
