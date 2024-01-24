const express = require('express')

const authRouter = express.Router()

const User = require('../models/authModel.js')

const jwt = require('jsonwebtoken')



authRouter.post('/signup', async(req,res)=>{
    try {
        const foundUser = await User.findOne({username: req.body.username})
        if(foundUser){
           res.status(403).send('Username already exists')
        }

        else if(!foundUser){
            const newUser = new User(req.body)
            await newUser.save()

            const token = jwt.sign(newUser.withoutPassword(), process.env.SECRET)
            res.status(200).send({token: token, user: newUser.withoutPassword()})
        }
        

    } catch (err) {
        res.status(500)
        res.json({message: "Issue in auth router"})
    }
})


authRouter.post('/login', async(req,res)=>{
    try{   const foundOne = await User.findOne({username: req.body.username})
       if(foundOne){
           foundOne.checkPassword(req.body.password, (err,isMatch)=>{
               if(err){
                   console.log(err)
                   res.status(403)
                   res.json({message: err})
               }
               if(!isMatch){
                   console.log('no match')
                   res.status(403)
                   res.json({message: 'username or password does not match'})
               }
               if(isMatch){
                   const token = jwt.sign(foundOne.withoutPassword(), process.env.SECRET)
                   res.status(200).send({token, user:foundOne.withoutPassword()})
               }
           })
       }
       if(!foundOne){
           const err = 'account does not exist'
           throw err
       }
   }
   
   catch (err){
       console.log(err)
       res.status(500)
       res.json({message: err})
   }
   })
module.exports = authRouter