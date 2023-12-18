const express = require('express')
const mongoDB = require('./db')
const app=  express()


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json())

mongoDB()

app.use('/api', require('./Routes/userManage'))
app.use('/', (req, res) => {
    res.status(200).send({message:'Welcome to the API'})
})

app.listen(80, ()=> {
    console.log('Server is running on port 5000')
})
