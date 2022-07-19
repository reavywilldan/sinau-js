const fs = require('fs')
const path = require('path')

const readFile = async (paths) => {
  try {
    const data = await fs.readFileSync(path.resolve(__dirname, paths), 'UTF-8')
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

readFile('notes.txt')