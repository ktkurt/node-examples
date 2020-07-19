//const {Schema, model} = require('mongoose')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [false, 'Username is required']
    },
    email: {
        type: String,
        required: [false, 'Email is required']
    },
    password: {
        type: String,
        required: [false, 'password is required']
    },
    role:{
        type: String
    },
    plansID: {
        type: Array
    }
})

var model = mongoose.model('user', UserSchema)
//module.exports = model('UserSchema', schema)
module.exports = model