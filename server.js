const express = require('express')
const sendBot = require('./newsData/findNews.js')
let doOnce = false
const app = express()
const morgan = require('morgan')
app.use(express.json())

app.use(morgan('dev'))
if(!doOnce){
    sendBot()
    doOnce = true
}

function botControl(){
    sendBot()
}

app.use('/api/getNews', require('./routes/getNews.js'))


app.use((err,req,res,next)=>{
    res.send({errMsg: err.message})
})



app.listen(8173, console.log('Server is running'), setInterval(botControl, 86400000))

