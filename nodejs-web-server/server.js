const http = require('http')
const router = require('find-my-way')(
  {
    defaultRoute: (request, response) => {
      const objContent = {
        message: 'Halaman tidak ditemukan'
      }

      const jsonContent = JSON.stringify(objContent)

      response.statusCode = 404
      response.end(jsonContent)
    }
  }
)

// ROUTING

// home
router.on('GET', '/', (request, response) => {
  const objContent = {
    message: 'Ini adalah homepage'
  }

  const jsonContent = JSON.stringify(objContent)

  response.statusCode = 200
  response.end(jsonContent)
})

// about
router.on('GET', '/about', (request, response) => {
  const objContent = {
    message: 'Halo! Ini adalah halaman about'
  }

  const jsonContent = JSON.stringify(objContent)

  response.statusCode = 200
  response.end(jsonContent)
})

router.on('POST', '/about', (request, response) => {
  let body = []

  request.on('data', (chunk) => {
    body.push(chunk)
  })

  request.on('end', () => {
    body = Buffer.concat(body).toString()
    body = JSON.parse(body)

    const name = body.name

    const objContent = {
      message: `Halo, ${name}! Ini adalah halaman about`
    }

    const jsonContent = JSON.stringify(objContent)

    response.statusCode = 200
    response.end(jsonContent)
  })
})

// SERVER
const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'application/json')
  response.setHeader('X-Powered-By', 'NodeJS')

  router.lookup(request, response)
})

const port = 3000
const host = 'localhost'

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`)
})