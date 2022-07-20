const fs = require('fs')
const path = require('path')

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
  highWaterMark: 15
})

readableStream.on('readable', () => {
  try {
    process.stdout.write(`${readableStream.read()}\n`)
  } catch (err) {
    console.log(err)
  }
})

readableStream.on('end', () => {
  console.log('done')
})