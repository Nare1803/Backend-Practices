const mathOperations = require("./mathOperations")

try {
    console.log (" Addition:", mathOperations.add(5, 3))
    console.log("Subtraction: ", mathOperations.subtract(5, 3))
    console.log("Multiplication:", mathOperations.multiply(5, 3))
    console.log("Division:", mathOperations.divide(10, 2))
    console.log("Division by zero:", mathOperations.divide(10, 0))
} catch (error) {
    console.error("Error:", error.message)
}