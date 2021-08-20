// modules
require('dotenv').config();
const path = require('path');
const express = require('express');     // const http = require('http');
const mongoose = require('mongoose');
const { mongoConnect } = require('./mongo');
const Student = require('./models/Student');

const app = express();

//variables
const APP_PORT = process.env.APP_PORT || 3001;
const HOST = 'localhost';

app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}));

//load page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
    // res.send('<h1>Hello World</h1>');
});

//load students
// mongoConnect();
app.get('/', (req, res) => {

})

//add student
app.post("/", (req, res) => {
    //Connect to database
    mongoConnect();

    //Create new Student
    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        grade: req.body.grade
    });

    //Save Student
    student.save()
    .then(result => {
        console.log(result);
        mongoose.connection.close(() => {
            console.log('DB DISCONNECTED');
        });
    })
    .catch(err => {
        console.log(err);
    });

    //Reload Page
    res.redirect('/');
})

//make app listen to specified port
app.listen(APP_PORT,() => {
    console.log(`Server is running on http://${HOST}:${APP_PORT}`);
});