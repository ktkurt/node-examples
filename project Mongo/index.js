const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

const app = express()

//full path: 
// mongodb+srv://DmitriyBor:Xnn2qsr6VN7fFu96@adaptaionplan.koqlm.mongodb.net/test?authSource=admin&replicaSet=atlas-14kxvc-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true
const db = 'mongodb+srv://DmitriyBor:Xnn2qsr6VN7fFu96@adaptaionplan.koqlm.mongodb.net/test'
async function start(){
    try{
    await mongoose
    .connect(db, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB has been connected...'))
    app.listen (PORT, () => {
        console.log('Server has been started...')
    })
    }   catch(e){
        console.log(e)
    }
}

start()