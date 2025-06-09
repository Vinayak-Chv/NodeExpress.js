// Here we give only index.html and everything is in static function and express take care of everything else.
// And in Express Everything works as a static because it runs on the browser not the server  
// And We can also add navbar-app directly in the static function

const express = require("express")
const path = require("path")

const app = express()

// We can add navbar-app directly by not doing this
app.use(express.static(".\\Public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, ".//navbar-app//index.html"))
})

app.all("*", (req, res) => {
    res.status(404).send("Resource not found")
})

app.listen(5000, () => {
    console.log(`Server is listening on port 5000...`)
})