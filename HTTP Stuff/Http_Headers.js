const http = require("http")

const server = http.createServer((res, req) => {
    res.writeHead(200, {"content-type":"text/html"})    //Whatever you Setup in the Content type like text/html
    res.write("<h1>Home Page</h1>")     //The Same has to be Here also.
    res.end()    
})

server.listen(5000)