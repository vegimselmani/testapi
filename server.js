var express  = require('express')
var app  = express()
import cors from 'cors';
app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
 });
var server = app.listen(process.env.PORT || 5000, () => {
    console.log('Server is started on 127.0.0.1:'+ (process.env.PORT || 5000))
});