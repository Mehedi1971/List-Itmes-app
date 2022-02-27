const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const ListItmesRoutes = require('./routes/api/listItems')
const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

mongoose
  .connect('mongodb://localhost/listItems', {})
  .then(() => console.log('MongoDB database Connected...'))
  .catch((err) => console.log(err))
app.use('/api/listItmes', ListItmesRoutes)
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log(`listing to port 3000`)
})
