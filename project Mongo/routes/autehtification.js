const {Router} = require('express')
const mongoose = require('mongoose') 
const user = require('../models/userSchema')
const router = Router()

const email = 'dima@mail.ru'

router.get('/', (req, res ) => {
    const users = user.find()

    res.render('index', {
        title: 'Main page',
        users
    })

})
router.get('/sass', (req, res) => {
    res.render('sass', {
        title: 'Authorisation page'
    })
})

userRES = user.find({}, function(err, data){
    console.log(">>>>" + data)
})

module.exports = (userRES, router)