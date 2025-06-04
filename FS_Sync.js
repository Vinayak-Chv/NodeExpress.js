const {readFileSync, writeFileSync} = require("fs");

const first = readFileSync(".\\Path Module\\Content\\Subfolder\\Test.txt", "utf8")
const second = readFileSync(".\\Path Module\\Content\\Subfolder\\Second.txt", "utf8")

console.log(first, second);

// If File is not there Node will Create one but when it is There, all the contents will Override
writeFileSync(".\\Path Module\\Content\\Subfolder\\Third.txt", `Here is the Result: ${first}, ${second}`, {flag: "a"})