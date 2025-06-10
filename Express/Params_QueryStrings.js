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
     const {productID} = req.params

    const singleProduct = products.find((product) => product.id === Number(productID))
    
    if(!singleProduct) {
        return res.status(404).send("Product Does Not Exist")
    }
    
    res.json(singleProduct)
})

// We have added the :ProductId as well as for the review, This is for when the values of are changing on time.
// Like user enters product id as 1 so it will show that product which has the id of 1
// Same for the Review, Here if user anything garbage or value which not matches the id. It will show the 'Hello World'
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    console.log(req.params)
    res.send("Hello World")
})

// Query String = If we have link like this = /api/v1/query we can add 2 or more things in it.
// Like this - /api/v1/query?name=vinayak&id=76
app.get("/api/v1/query", (req, res) => {
    // console.log(req.query)
    // res.send("Hello World")

    const {search, limit} = req.query
    let sortProducts = {...products}

    if(search) {
        sortProducts = sortProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    
    if(sortProducts.length < 1) {
        // res.status(200).send("No products matched you search")

        return res.status(200).json({success:true, data: []})
    }

    if(limit) {
        sortProducts = sortProducts.slice(0, Number(limit))
    }

    res.status(200).json(sortProducts)
})

app.listen(5000, () => {
    console.log("Server is listening on Port 5000....")
})