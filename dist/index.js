'use strict';

var cookieParser = require('cookie-parser');
var createServer = require('./src/server/create-server');

var server = createServer();
server.express.use(cookieParser());

server.start({
  cors: {}
}, function () {
  return console.log('listening..............');
});