var express  = require('express')
var app  = express()
var server = app.listen(process.env.PORT || 5000, () => {
    console.log('Server is started on 127.0.0.1:'+ (process.env.PORT || 5000))
})

let headers = new Headers();
  headers.append('Access-Control-Allow-Origin');