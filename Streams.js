const {createReadStream} = require("fs")

const stream = createReadStream(".\\Path Module\\Content\\Subfolder\\Big.txt", {
    highWaterMark: 90000,
})

stream.on("data", (result) => {
    console.log(result)
})

stream.on("error", (err) => { console.log(err) })