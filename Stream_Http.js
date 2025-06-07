var http = require("http")
var fs = require("fs")

http.createServer((req, res) => {
    // const text = fs.readFileSync(".\\Path Module\\Content\\Subfolder\\Big.txt", "utf-8")
    // res.end(text)

    const fileStream = fs.createReadStream(".\\Path Module\\Content\\Subfolder\\Big.txt", "utf-8")
    fileStream.on("open", () => {
        fileStream.pipe(res)   // Pushing the Data in Chunks
    })
    fileStream.on("error", (err) => {
        res.end(err)
    })
}).listen(5000)