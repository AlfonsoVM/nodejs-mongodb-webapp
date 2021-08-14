//modules
const express = require('express');     // const http = require('http');
const app = express();
const path = require('path');

//variables
const PORT = process.env.PORT || 3001;
const HOST = 'localhost';

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
    // res.send('<h1>Hello World</h1>');
});

app.listen(PORT);
// console.log('Server is running on ' + PORT);
console.log(`Server is running on http://${HOST}:${PORT}`);