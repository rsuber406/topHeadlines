const express = require('express')

const app = express()
const morgan = require('morgan')
app.use(express.json())

app.use(morgan('dev'))







app.listen(8173, console.log('Server is running'))

