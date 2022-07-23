const handler = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: handler.addNoteHandler
  }
]

module.exports = routes
