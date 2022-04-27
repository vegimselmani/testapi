// server.js  
const jsonServer = require('json-server')  
const server = jsonServer.create()
const middlewares = jsonServer.defaults()  
   
server.use(middlewares)  
server.listen(3001, () => {  
  console.log('JSON Server is running')  
})  