const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Welcome to our home page")
    }
    if(req.url === "/about") {
        res.end("Here is our short history")
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seenm to find the page you are looking for</p>
        <a href="/">Back home</a>
        `)

    // res.write("Welcome to our Home Page");
    // res.end();
})

server.listen(5000)