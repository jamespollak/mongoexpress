const mongoose = require("mongoose")
const User = require(__dirname + "/../models/User.js");
const data = require(__dirname + "/data.js")

// make connection

mongoose
    .connect('mongodb://localhost:27017/mytestapp', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to Mongo!');
        return User.deleteMany();
    })
    .then(() => {
        return User.insertMany(data)
    })
    .then(() => {
        console.log('DB connection to Mongo was closed!');

        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error connecting to mongo', err);
        mongoose.connection.close();
    });

// delete data
// insert data
// close connection

//### dependencies


// libraries, node module third party library
// mongoose
// user model
// data