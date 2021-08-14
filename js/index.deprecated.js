//#region modules
const http = require('http');   // import http from "http";
//#endregion

//#region variables
const host = 'localhost';
const port = 8000;
//#endregion

const requestListener = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});