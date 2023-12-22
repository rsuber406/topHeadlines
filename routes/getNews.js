const express = require('express')

const newsRouter = express.Router()

const getData = require('../newsData/dataFunctions.js')


newsRouter.get('/', async(req,res)=>{
    try {
          const myNews = getData(req.body)

          res.status(200).send(myNews)
    } catch (err) {
        res.status(500)
        res.json({message:err})
    }
})

module.exports = newsRouter