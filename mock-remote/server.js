const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())

app.get('/cars', (req, res) => res.send(require('./cars.json')))

app.listen(process.env.API_PORT || 3001)
