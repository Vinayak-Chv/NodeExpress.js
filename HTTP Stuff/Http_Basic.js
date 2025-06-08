const http = require("http")

const server = http.createServer((res, req) => {
    console.log("User hit the server")
    res.end("home page")    //This is to Say that the Communication is End.
})

server.listen(5000)