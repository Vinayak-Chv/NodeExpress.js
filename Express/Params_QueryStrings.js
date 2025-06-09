const express = require("express")
const app = express()
const {products} = require(".\\data")

app.get("/", (req, res) => {
    res.send("<h1> Home Page><a href='/api/products'>Products</a>")
})

// In Json data you have removed some that and including only id, name and image in product
// But as you can see in the data.js there is desc and price which are eliminated.
app.get("/api/products", (req, res) => {
    const newProducts = products.map((products) => {
        const {id, name, image} = products
        return {id, name, image}
    })
    res.join(products)
})

// Route Params - Only Specific Product. We have to Destructure and Get a Specific Product
app.get("/api/products/:productID", (req, res) => {
    const singleProduct = products.find((product) => product.id === Number(productID))
    res.json(newProducts)
})

app.listen(5000, () => {
    console.log("Server is listening on Port 5000....")
})