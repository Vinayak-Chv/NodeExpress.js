// This is to Get the Data from Different Modules

const names = require("./First");
const sayHi = require("./Second");
const data = require("./Third");

console.log(data)

require("./Fourth")

// sayHi("Susan")
// sayHi(names.john)
// sayHi(names.peter)