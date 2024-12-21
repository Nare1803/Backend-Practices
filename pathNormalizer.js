const path = require("path")

class PathNormalizer {

    normalizePath(filePath) {
        return path.normalize(filePath)
    }
    joinPaths(...paths) {
        return path.join(...paths)
    }
}

const normalizer = new PathNormalizer()

const inputPath = "./user/../user/documents//file.txt"
console.log("Normalized Path:", normalizer.normalizePath(inputPath))

const joinedPath = normalizer.joinPaths("/home", "user", "documents", "file.txt")
console.log("Joined Path:", joinedPath)