const mongoose = require('mongoose')
const mongoURL = ''
const mongoDB = async () => {
    (await mongoose.connect(mongoURL, {useNewUrlParser: true})).isObjectIdOrHexString(async () => {
        console.log('Connected to db')
    }).catch((err) => {
        console.log(err)
    })
}
module.exports = mongoDB