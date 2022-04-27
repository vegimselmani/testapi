var express  = require('express')
var app  = express()

app.get('/', function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.send('hello world')
})