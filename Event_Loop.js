// Set Timeout and Interval are different. Let's Say we set the time as 2000(2s) so Timeout function will executes in 2 seconds and Interval executes every 2 seconds
// Timeout Executes and Stops but Interval Executes it every 2 Seconds we have to stop it

console.log("First")

setTimeout(() => {
    console.log("Second")
}, 0)

console.log("Third")