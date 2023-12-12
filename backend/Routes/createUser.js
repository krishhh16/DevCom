const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jsonSecret = 'In this world, winning is everything'
const User = require('../models/user')

router.post('/createuser', async (req, res) => {
    const {userName, email, password} = req.body
    if (!userName || !email || !password){
        return res.status(400).json({msg: 'Missing fields'})
    }
    const user = await User.findOne({email})
    if (user) return res.status(400).json({msg: 'User exists'})
    const salt = await bcrypt.genSalt(10)
    const hashedPWD = await bcrypt.hash(password, salt)

    try {
        await User.create({
            userName,
            email,
            password: hashedPWD
        })
        console.log('user created')
        return res.status(200).send({success: true})
    }catch (error) {
        console.log('user creation failed')
        return res.status(400).send({ success: false, error})  
    }
})

module.exports = router;