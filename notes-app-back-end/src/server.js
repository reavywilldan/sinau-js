const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
  try {
    const objServer = {
      port: 5000,
      host: 'localhost',
      routes: {
        cors: {
          origin: ['*'],
          headers: ['Authorization'],
          exposedHeaders: ['Accept'],
          additionalExposedHeaders: ['Accept'],
          maxAge: 60,
          credentials: true
        }
      }
    }

    const server = Hapi.server(objServer)
    server.route(routes)

    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`)
  } catch (err) {
    console.log(err)
  }
}

init()
