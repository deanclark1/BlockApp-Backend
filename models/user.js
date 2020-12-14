const mongoose = require('mongoose')

/**
 * 
 * 
 * _id
 * __v
 * password
 */



const userSchema = mongoose.Schema({
    firstName: { type: String, required:true },
    lastName: { type: String, required:true},
    email: { type: String, required:true, unique:true},
    password:{ type: String, required:true }
})

userSchema.set('toJSON', {
    transform: (doc, user) =>{
        user.id = user._id.toString()
        delete user._id
        delete user.__v
        delete user.password
    }
})


// creating a module
const User = mongoose.model('User', userSchema)

module.exports = User