const express = require("express")
const app = express()
let {people} = require(".\\data")

// Make Everything a Static Asset
app.use(express.static(".\\methods-public"))

// Parse the Form Data
app.use(express.urlencoded({extended: false}))

// Parse the Json
app.use(express.json())

// Default Method that browser perform and Read the Data (InShort)
app.get("/api/people", (req, res) => {
    res.status(200).json({success:true, data:people})
})

app.post("/api/people", (req, res) => {
    res.status(201).send("Success")
})

app.post("/login", (req, res) => {
    const {name} = req.body

    if(!name) {
        return res.status(400).json({success:false, msg:"Please provide name value"})
    }

    res.status(201).json({})
})

app.listen(5000, () => {
    console.log("Server is listening the Port 5000.....")
})