import express from 'express'
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const routes = require('./routes')
routes(app)

const port = 8088

app.listen(port, () => console.log('Example app listening on port ' + port))
