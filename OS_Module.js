const os = require("os");

// Info of the Current User
const user = os.userInfo()
console.log(user)

// System in Uptime Seconds
console.log(`The System Uptime is ${os.uptime()}s`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);