const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required:true,
        trim:true,
        validate(value){
            if(value.includes('password')){
                throw new Error('Password cannot contain password')
            }
        }
    },
    age: {
        type: Number,
    }
})

module.exports = User