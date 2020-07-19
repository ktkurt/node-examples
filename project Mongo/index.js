const express = require('express')
const mongoose = require('mongoose')
//const user = require('./models/userSchema.js')
const AuthRouter = require('./routes/autehtification')

const exphbs = require('express-handlebars') //нужен для того,чтобы страницы потестить(шаблонизатор)
//const User = mongoose.model('User', userSchema, 'users')

const PORT = process.env.PORT || 3000

const app = express()
//настройки шаблонизатора разметки
const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'hbs' //просто указываем тип расширения файлов страниц, потому что по дефолту писать "handlebars" - долго
})

//вызываем движок для рендринга страниц, даем название 'hbs'
app.engine('hbs', hbs.engine)
//прописываем, что по умолчанию для рендера испоьзуем hbs
app.set('view engine', 'hbs')
//откуда берутся страницы - папка views
app.set('views', 'views')

app.use(AuthRouter)
//full path: 
// mongodb+srv://DmitriyBor:Xnn2qsr6VN7fFu96@adaptaionplan.koqlm.mongodb.net/adaptationPlan?authSource=admin&replicaSet=atlas-14kxvc-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true
const dburl = 'mongodb+srv://DmitriyBor:Xnn2qsr6VN7fFu96@adaptaionplan.koqlm.mongodb.net/adaptationPlan?authSource=admin&replicaSet=atlas-14kxvc-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true'
async function start(){
    try{
    await mongoose
    .connect(dburl, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB has been connected...'))

    var db = mongoose.connection

    app.listen (PORT, () => {
        console.log('Server has been started...')
    })
    }   catch(e){
        console.log(e)
    }
}



//findUsers()
start()
