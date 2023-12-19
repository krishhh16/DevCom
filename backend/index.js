const express = require('express')
const mongoDB = require('./db')
const cors = require('cors')

const app=  express()
const PORT = 5000

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json())
app.use(cors())
mongoDB()

app.use('/api', require('./Routes/userManage'))

app.use('/users', require('./Routes/getUsers'))
app.use('/', (req, res) => {
    res.status(200).send({message:'Welcome to the API'})
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})
