const path = require("path")

// Separator - Differs From Device Models
console.log(path.sep)

// We have Join the File Path
const filePath = path.join("\\Content\\", "Subfolder", "Test.txt");
console.log(filePath)

// Gives the Base or the Last Name
const base = path.basename(filePath)
console.log(base)

// Gives the Absolute Path
const abs = path.resolve(__dirname, "Content", "Subfolder", "Test.txt")
console.log(abs)