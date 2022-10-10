const express = require('express')
const morgan = require('morgan')
const pokemon = require('./models/pokemon.js')

const app = express()
const PORT = 4000

app.use(morgan('dev'))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req,res) => {
    res.send('Welcome! Lets start Pokemon hunting together!')

})
app.get('/pokemon', (req,res) => {
    res.render('Index')
})
app.listen(PORT, (req,res) => {
    console.log(`server is running on port: ${PORT}`);
})
