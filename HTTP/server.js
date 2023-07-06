// const http = require('http')

// const hostName = '127.0.0.1';
// const port = 8080;

// const server = http.createServer((req, res) => {
//     // res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');
//     // replcae it with 
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Max-Age', '86400');
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end('welcome hakam qadi\n')
// })

// server.listen(port, hostName, () => {
//     console.log(`server running at http://${hostName}:${port}`)
// })






// send html file 


const http = require('http')

const hostName = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // replcae it with 
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Max-Age', '86400');
    // res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.end('./index.html')

    
    const fs = require('fs');

    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });



})

server.listen(port, hostName, () => {
    console.log(`server running at http://${hostName}:${port}`)
})
// to edit the code and see the edited when you refresh the page 
// 1.npm install nodemon
// 2.npx nodemon fileName.js