// 4

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/file") {
        fs.readFile("example.txt", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello From Root");
    }
});

server.listen(8000, () => {
    console.log("Server is running on http://127.0.0.1:8000");
});






