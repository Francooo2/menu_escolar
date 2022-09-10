const express           = require('express')
const exphbs            = require('express-handlebars')
const cookieParser      = require('cookie-parser')
const dotenv            = require('dotenv')
const path              = require('path')

const app = express()

dotenv.config({ path: './.env'})

app.engine('handlebars', exphbs.engine({
    partialsDir: __dirname + '/views/components/'
}))

app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, '/views'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(express.static(__dirname + '/public'))

app.set('port', 3000)


app.use('/auth', require('./routes/auth'))
app.use('/', require('./routes/renders'))

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
})

