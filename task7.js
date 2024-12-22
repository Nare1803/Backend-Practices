const fs = require("fs")

try{
  fs.writeFileSync("message.txt","Hello World")
  const  content = fs.readFileSync("message.txt")

  const contentStr = content.toString("utf-8")
  const modifiedContent = contentStr.replace("Hello", "Hello Awesome")
  fs.writeFileSync("message.txt", modifiedContent)
  console.log("Updated File Content: ", modifiedContent)

} catch(error) {
    console.log("Error:",error.message)
}