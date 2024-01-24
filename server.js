const express = require('express')
const sendBot = require('./newsData/findNews.js')
let doOnce = false
const app = express()
require('dotenv').config()
const {expressjwt} = require('express-jwt')
const morgan = require('morgan')
const mongoose = require('mongoose')



app.use(express.json())


mongoose.connect(process.env.dbAuth , console.log('connected to db'))
app.use(morgan('dev'))
// if(!doOnce){
//     sendBot()
//     doOnce = true
// }

function botControl(){
    sendBot()
}
// I do not need to put specific paths here, I can list them inside the routes and protect them accordingly by using the /api/auth route
app.use("/api/auth", expressjwt({secret: process.env.SECRET, algorithms: ["HS256"]}) )
app.use('/api', require('./routes/getNews.js'))
app.use("/api", require('./routes/authRouter.js'))


app.use((err,req,res,next)=>{
    res.send({errMsg: err.message})
})



app.listen(8173, console.log('Server is running'), setInterval(botControl, 86400000))

