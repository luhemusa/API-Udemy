const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const http = require("http")
//comentario nuevo
dotenv.config();

const app = express()

app.use(cors({
    origin: function(origin, callback){
      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));
  
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = require('./routes/router.js')

app.get('/', (req, res) =>{ res.send('Hello World') })
app.use('/api', router)

const servidor = http.createServer(app);

servidor.listen(5000, () => console.log('Server running at port 5000.!'));