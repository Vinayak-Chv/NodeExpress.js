const {readFile, writeFile} = require("fs").promises
// const util = require("util")
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)



const start = async() => {
    try {
        const first = await readFile(".\\Path Module\\Content\\Subfolder\\Test.txt", "utf-8")
        const second = await readFile(".\\Path Module\\Content\\Subfolder\\Second.txt", "utf-8")
        await writeFile(".\\Path Module\\Content\\Subfolder\\Result_1.txt", `This is the Result: ${first} ${second}`, {flag: "a"})
        console.log(first, second)
    }
    catch (error) {
        console.log(error)
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf-8", (err, data) => {
//             if(err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText(".\\Path Module\\Content\\Subfolder\\Test.txt")
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))