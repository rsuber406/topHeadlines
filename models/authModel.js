const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

 const userSchema = Schema({
    username: {
        required: true,
        type: String
    },

    password: {
        required:true,
        type: String
    }
 })


 userSchema.pre('save', function(next){
    const user = this
    if(!user.isModified('password')){return next()}
    else bcrypt.hash(user.password, 10, (err, hash)=>{
        if(err){return next(err)}
        user.password = hash
        next()
    })
 })


 userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
 }

 userSchema.methods.checkPassword = function(passwordAttempt, callback){
    console.log('checkpass fired')
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch)=>{
        if(err){
            return callback(err)

        }
        return callback(null, isMatch)
    })
}


 module.exports = mongoose.model('User', userSchema)


