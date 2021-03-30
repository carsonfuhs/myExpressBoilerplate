//grab env variables
require('dotenv').config

//import express
const express = require('express')

//import database connection
const mongoose = require('./db/connection')

//import merced logger
const {log} = require('mercedlogger')

//import middleware
const methodOverride = require('method-override')
const morgan = require('morgan')
const cors = require('cors')

//port variable
const PORT = process.env.PORT || '2021'

//create app object
const app = express()

//set the view engine
app.set('view engine', 'ejs')

//setup middleware
app.use(cors()) //prevents cors errors
app.use(methodOverride('_method')) //swap methods for put/delete requests
app.use(express.static('public')) //serve public folder as static
app.use(morgan('tiny')) //request logging
app.use(express.json()) //parse json bodies
app.use(express.urlencoded({extended: false}))


//routes and routers
const ProductRouter = require('./routes/products')

//test route
// app.get('/', (req, res) => {
//     res.send('<h1>Hello World</h1>')
// })

//app.use('/', ProductRouter)

//app.use('/', indexRouter)
app.use('/products', ProductRouter)


//app listener
app.listen(PORT, () => log.white('Server Launch', `Listening on Port ${PORT}`))