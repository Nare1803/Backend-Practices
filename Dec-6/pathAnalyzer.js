const path = require("path")
class PathAnalyzer {
    getBaseName(filePath){
         return path.basename(filePath)
    }
    getDirName(filePath){
         return path.dirname(filePath)    
    }
    getExtension(filePath){ 
         return path.extname(filePath)
    }
    isAbsolutePath(filePath){
          return path.isAbsolute(filePath)
    }
}

const analyzer = new PathAnalyzer()
const filePath = "/home/user/documents/report.pdf"

console.log("Base Name:", analyzer.getBaseName(filePath))
console.log("Directory Name:", analyzer.getDirName(filePath))
console.log("File Extension:", analyzer.getExtension(filePath))
console.log("Is Absolute Path:", analyzer.isAbsolutePath(filePath))