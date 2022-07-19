const fs = require('fs')
const path = require('path')

const readableStream = fs.createReadStream(path.resolve(__dirname, 'notes.txt'), {
  highWaterMark: 10
})

readableStream.on('readable', () => {
  try {
    process.stdout.write(`${readableStream.read()}`)
  } catch (err) {
    console.log(err)
  }
})

readableStream.on('end', () => {
  console.log('done')
})