const http = require('http')
const router = require('find-my-way')()

// ROUTING

// home
router.on('GET', '/', (request, response) => {
  response.setHeader('Content-Type', 'text/html')
  response.statusCode = 200

  response.end('<h1>Ini adalah homepage</h1>');
})

// about
router.on('GET', '/about', (request, response) => {
  response.setHeader('Content-Type', 'text/html')
  response.statusCode = 200

  response.end('<h1>Halo! Ini adalah halaman about</h1>');
})

router.on('POST', '/about', (request, response) => {
  response.setHeader('Content-Type', 'text/html')

  let body = []

  request.on('data', (chunk) => {
    body.push(chunk)
  })

  request.on('end', () => {
    body = Buffer.concat(body).toString()
    body = JSON.parse(body)

    const name = body.name

    response.statusCode = 200
    response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`)
  })
})

// SERVER
const server = http.createServer((request, response) => {
  router.lookup(request, response)
})

const port = 3000
const host = 'localhost'

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`)
})