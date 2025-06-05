// This is Async That dosen't work in a Sync like Sync Executes Like by line But it dosen't.

const {readFile, writeFile} = require("fs");

readFile(".\\Path Module\\Content\\Subfolder\\Test.txt", "utf8", (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile(".\\Path Module\\Content\\Subfolder\\Second.txt", "utf8", (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile(".\\Path Module\\Content\\Subfolder\\Result.txt", `Here is the Result : ${first}, ${second}`, (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})