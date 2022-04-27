var express  = require('express')
var app  = express()
import cors from 'cors';
const app = express();

const cors = require('cors');

app.use(cors({
  origin: 'https://foo.com'
}));

app.get('/', (req, res) => {
  res.send('CORS solved')
})