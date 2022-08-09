const fs = require('fs')
const path = require('path')

const createPathDirectories = (p) => {
  const directories = p.split('/')
  for (let i = 0; i <= directories.length; i++) {
    const directory = path.resolve(directories.slice(0, i).join('/'))
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory)
    }
  }
}

const rootPath = path.dirname(__dirname)

const writeInFile = (dirPath, fileName, data, options) => {
  createPathDirectories(dirPath)
  fs.writeFileSync(path.join(dirPath, fileName), data, options)
}

const fsUtils = {
  createPathDirectories,
  rootPath,
  writeInFile,
}

module.exports = fsUtils
