require('dotenv').config();
const app = require('./server.js');
const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');

//variables
const APP_PORT = process.env.APP_PORT || 3001;
const APP_HOST = process.env.APP_HOST || 'localhost';

function appConnect() {
    mongoose.connect(
        'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME, {
        auth: {"authSource": "admin"},
        poolSize: 50,
        writeConcern: 2500,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(async () => {
        console.log('DB CONNECTED SUCCESSFULLY');
        app.listen(APP_PORT,() => {
            console.log(`Server is running on http://${APP_HOST}:${APP_PORT}`);
        });
    }).catch(err => {
        console.error(err);
        console.log('La puta madre');
    })
}

appConnect();