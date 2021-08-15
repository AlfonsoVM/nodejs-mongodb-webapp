//modules
const dotenv = require('dotenv').config();
const express = require('express');     // const http = require('http');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

//variables
const APP_PORT = process.env.APP_PORT || 3001;
const HOST = 'localhost';

function mongoConnect() {
    mongoose.connect(process.env.DB_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)}

// mongoConnect();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
    // res.send('<h1>Hello World</h1>');
});

app.listen(APP_PORT);
// console.log('Server is running on ' + APP_PORT);
console.log(`Server is running on http://${HOST}:${APP_PORT}`);
console.log('The value of APP_PORT is: ' + process.env.APP_PORT);