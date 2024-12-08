
function unique (arr) {
    return [...new Set( arr)]
}

function flatten(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("input must be an arrayy")
    }
    return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flatten(item) : item)
    }, [])
}
function chunk(arr,size) {
    if (!Array.isArray(arr)) {
        throw new Error("input must be an array")
    }
    if (typeof size != "number" || size <= 0){
        throw new Error("size must be a positive numbber")
    }
    const result = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result
}

module.exports = { unique, flatten, chunk}