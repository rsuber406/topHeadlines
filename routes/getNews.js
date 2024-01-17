const express = require('express')

const newsRouter = express.Router()

const getData = require('../newsData/dataFunctions.js')


newsRouter.post('/', async(req,res)=>{
    try {
            console.log(req.body)
          const myNews = getData(req.body)
          res.status(200).send(myNews)
        
    } catch (err) {
        console.log(err)
        res.status(500)
        res.json({message:err})
    }
})

module.exports = newsRouter