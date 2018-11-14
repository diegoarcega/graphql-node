const cookieParser = require('cookie-parser')
const createServer = require('./src/server/create-server')

const server = createServer()
server.express.use(cookieParser())

server.start({
  cors: {},
}, () => console.log('listening..............'))
