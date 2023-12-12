const mongoose = require('mongoose')
const mongoURL = 'mongodb+srv://krishh:2824@codefolio.prdij28.mongodb.net/'
const mongoDB = async() => {
    await mongoose.connect(mongoURL).then(async () => {
        console.log('Connected to db')
        
    }).catch((err) => {
        console.log(err)
    })
}
module.exports = mongoDB