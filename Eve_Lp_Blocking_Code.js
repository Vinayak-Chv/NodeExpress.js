// This is the Code that blocks the Async or Event Loop

const http = require("http");

const server = http.createServer((req, res) => {
    for(let i = 0; i < 1000; i++) {
        for(let j = 0; j < 1000; j++) {
            console.log(`${i} : ${j}`)
        }
    }

    if (req,url === "/") {
        res.end("Home Page")
    }
    if (req.url === "/about") {
        res.end("About Page")
    }
    res.end("Error Page")
})

server.listen(5000, () => {
    console.log("Server is Listening on Port 5000...");
})