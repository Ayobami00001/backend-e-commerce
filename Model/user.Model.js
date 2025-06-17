const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    profileImage: {type: String , default: "" }
})


let userModel = mongoose.model('user', userSchema)

module.exports = userModel