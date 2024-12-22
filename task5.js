const fs = require("fs")

try{
  const fd = fs.openSync("example.txt","r")
  const stats = fs.fstatSync(fd)
  const fileLength = stats.size
  console.log("File length is ",fileLength,"bytes." )

  const middlePosition = Math.floor(fileLength / 2)
  const buffer = Buffer.alloc(10)
  fs.readSync(fd, buffer, 0, buffer.length, middlePosition)

  console.log("Next 10 bytes from the middle:", buffer.toString("utf-8"))

  fs.closeSync(fd)
} catch(error) {
   console.log("Error:",error.message)
}