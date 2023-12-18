const express = require('express')
const jwt = require('jsonwebtoken')
const jsonSecret = 'In this world, winning is everything'
const User = require('../models/user')

const router = express.Router()

router.use((req,res,next) => {
    let token = req.headers.authorization;

    try {
        req.decoded = jwt.verify(token, jsonSecret)
        next();
    } catch(err){
        return res.status(401).send({auth: false, message:'No autenticado', error: err.message})

    }
})

router.post('/getUserInfo', async (req, res)=> {
    const {id} = req.decoded;
    const userData = await User.findOne({userName: id})
    const {userName, email, twitterLogin, linkedinLogin} = userData;

    res.status(200).send({userName, email, twitterLogin, linkedinLogin})
})

module.exports = router;