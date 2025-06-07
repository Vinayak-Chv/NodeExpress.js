// You can Do many Event like both ON and Emmit Event Function, You can Give it many times.
// Follow the Structure. ON > Emmit. If you Emmit first the Console will Show NOTHING because you emmited it instead you have to ON it.

const EventEmmiter = require("events")

const customEmmiter = new EventEmmiter()

// Listen for an Event
customEmmiter.on("response", (name, id) => {
    console.log(`Data Received ${name} ${id}`)
})

customEmmiter.on("response", () => {
    console.log(`Some other Logic Here `)
})

// Emits the Event
customEmmiter.emit("response", "John", 34)