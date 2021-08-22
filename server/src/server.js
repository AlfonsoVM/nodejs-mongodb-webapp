// modules
require('dotenv').config();
const express = require('express');     // const http = require('http');
const cors = require('cors');

// start express
const app = express();

//app uses
app.use(express.json());
app.use(cors());
app.use('/', require('./routes/students.route.js'));
app.use('*', (req, res) => res.status(404).json({ error: "not found" }));

module.exports = app;