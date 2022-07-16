const server = require('pushstate-server')

server.start({
  
  host:'0.0.0.0',
  // port:8080,
  open:true,
  port: 5018,
  directory: './dist'
})