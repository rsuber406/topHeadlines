const express = require('express')

const newsRouter = express.Router()

const {getData , clearStories} = require('../newsData/dataFunctions.js')


newsRouter.post('/', async(req,res)=>{
    try {
           
          const myNews = getData(req.body)
          clearStories()
          res.status(200).send(myNews)
          
        
    } catch (err) {
        console.log(err)
        res.status(500)
        res.json({message:err})
    }
})

module.exports = newsRouter