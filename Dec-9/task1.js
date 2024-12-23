const fs = require("fs")

const filePath = "data.txt"
const fd = fs.openSync(filePath,"w")

fs.writeFileSync(fd,"Hello, this is the first line.\n")
fs.appendFileSync(fd,"This is the second line.\n")

fs.closeSync(fd)
