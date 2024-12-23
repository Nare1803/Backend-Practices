const fs = require("fs")

try{
  const sourceFd = fs.openSync("example.txt","w+")

  fs.writeSync(sourceFd,"0123456789",0,"0123456789".length,0)
  fs.writeSync(sourceFd,"AB",2,"AB".length,5)
  const buffer = Buffer.alloc(10)
  fs.readSync(sourceFd,buffer,0,buffer.length,0)
  console.log("File content:", buffer.toString("utf-8"))

  fs.closeSync(sourceFd)
} catch(error) {
   console.log("Error:",error.message)
}

