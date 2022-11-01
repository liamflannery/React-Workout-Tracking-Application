const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://thithanhtrang:Diplomatics1408%40@cluster0.3pyo9ow.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let getDatabase;

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    getDatabase = client.db("test");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

module.exports = { getDatabase };