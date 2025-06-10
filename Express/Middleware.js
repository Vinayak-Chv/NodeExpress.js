const express = require("express")
const app = express()

// This is a Middleware where we can use the common code in one Function and use it in any app.get Method
// If you are working on this, you have to send the next middleware. Either you terminate or send it to the next
const logger = require(".\\Middleware_Logger.js")
const authorize = require(".\\Middleware_Auth.js")

// Works the same as the app.get(..., logger, (req, res) () => {})
// We can set the Path also and if you apply the path as this, it will apply to all like - /api/home,about,products,items 
app.arguments("/api", logger)

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/about", (req, res) => {
    res.send("About")
})

app.get("/api/products", (req, res) => {
    res.send("Products")
})

app.get("/api/items", (req, res) => {
    res.send("Items")
})

app.listen(5000, () => {
    console.log("Server is listening on Port 5000....")
})