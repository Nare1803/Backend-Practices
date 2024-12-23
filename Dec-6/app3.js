const arrayUtils = require('./arrayUtils');

try {
    const array = [1, 2, 2, 3, 4, [5, 6, [7, 8]], 8, 9]
    console.log("Unique:", arrayUtils.unique([1, 2, 2, 3, 4, 4]))
    console.log("Flatten:", arrayUtils.flatten(array))
    console.log("Chunk:", arrayUtils.chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
} catch (error) {
    console.error("Error:", error.message)
}
