const mongoose = require('mongoose')

const {Schema} = mongoose

const UserSchema = new Schema({
    userName: {
        required: true, 
        type: String, 
        unique: true,
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    twitterLogin: {
        type: Boolean,
        default: false
    },
    linkedinLogin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('userInfo', UserSchema)