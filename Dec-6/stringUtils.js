function reverse(string) {
    if (typeof string != "string") {
        throw new Error("input must be a string")
    }
    return string.split("").reverse().join("")
}

function capitalize(string) {
    if (typeof string != "string") {
        throw new Error("input must be a string")
    }
    if (string.length === 0) {
         return string
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function truncate(string,length) {
    if (typeof string != "string"){
        throw new Error("inut must be a string")
    }
    if (typeof length != "number") {
        throw new Error("length must be a number")
    }
    return string.length > length ? string.slice(0, length) + '...' : string
}

module.exports = {
    reverse,
    capitalize,
    truncate
}
