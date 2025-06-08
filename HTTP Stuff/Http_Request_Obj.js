//We are only Sending the Contents of the File not the File Itself
//That's Why we use content-type in the res.writeHead

const http = require("http")
const {readFileSync} = require("fs")

const homePage = readFileSync(".\\Index.html")

const server = http.createServer((res, req) => {
    const url = req.url;

    if(url === "/") {
        res.writeHead(200, {"content-type":"text/html"})    
        res.write(homePage)     //You can Do this
        res.end() 
    }
    else if(url === "/about") {
        res.writeHead(200, {"content-type":"text/html"})
        res.write("<h1>About Page</h1>")    //And this also
        res.end()
    }
    else {
        res.writeHead(404, {"content-type":"text/html"})
        res.write("<h1>Page not Found</h1>")
        res.end()
    }
       
})

server.listen(5000)