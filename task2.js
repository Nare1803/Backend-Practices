const fs = require("fs")

try {
  const fd = fs.openSync("data.txt", "r")
  const buffer = Buffer.alloc(64)

  const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0)
  console.log("File Content:", buffer.toString("utf-8", 0, bytesRead))
  
  fs.closeSync(fd)
} catch (error) {
  console.error("Error:", error.message)
}


