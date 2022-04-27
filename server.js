var express  = require('express')
var app  = express()

const server1 = jsonServer.create();
const middlewares = jsonServer.defaults({ noCors: true })

// set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

var server = app.listen(process.env.PORT || 5000, () => {
    console.log('Server is started on 127.0.0.1:'+ (process.env.PORT || 5000))
});