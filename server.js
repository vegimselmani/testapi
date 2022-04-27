var express  = require('express')
var app  = express()
import cors from 'cors';
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authortization');
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
})

var server = app.listen(process.env.PORT || 5000, () => {
    console.log('Server is started on 127.0.0.1:'+ (process.env.PORT || 5000))
});