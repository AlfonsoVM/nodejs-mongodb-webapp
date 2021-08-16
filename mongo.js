const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('./models/Student');

function mongoConnect() {
    mongoose.connect('mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME, {
        auth: {"authSource": "admin"},
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(() => {
        console.log('DB CONNECTED SUCCESSFULLY');
    }).catch(err => {
        console.error(err);
    })
}


module.exports = { mongoConnect };

//mongodb querys

// //Example Student
// const student = new Student({
//     name: 'Alfonso',
//     age: 23,
//     grade: 1
// });

function saveStudent() {
    student.save()
    .then(result => {
        console.log(result);
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
    })
}

// mongoose.connection.close(() => {
//     console.log('DB DISCONNECTED');
// });