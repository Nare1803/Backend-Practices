// Task 3: Copy File Content Byte-by-Byte
// Description:
// Write a program that:
// Opens a source file data.txt in read mode and a destination file copy.txt in write mode.
// Allocates a buffer of 16 bytes to read data from the source file.
// Reads data into the buffer using fs.readSync and writes it to the destination file using fs.writeSync.
// Repeat the process until the entire file is copied.
// Closes both files.
 
const fs = require("fs")

try {

  const sourceFd = fs.openSync("data.txt", "r")
  const destFd = fs.openSync("copy.txt","w")
  const buffer = Buffer.alloc(16)

  let bytesRead
  do {
    bytesRead = fs.readSync(sourceFd, buffer, 0, buffer.length, null)
    if (bytesRead > 0) {
      fs.writeSync(destFd, buffer, 0, bytesRead)
    }
  } while (bytesRead > 0)

  fs.closeSync(destFd)
  fs.closeSync(sourceFd)

} catch (error) {
  console.error("Error:", error.message)
}