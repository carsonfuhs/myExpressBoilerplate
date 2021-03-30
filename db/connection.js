//grab enviornment variables
require('dotenv').config()

//import mongoose
const mongoose = require('mongoose')

//import merced logger for colorful logs
const {log} = require('mercedlogger')

//grab database string
const MONGODB_URL = process.env.MONGODB_URL //|| 'mongodb://localhost:27017/database'



/*------------------------------------------------------------
Mongoose Config Object
------------------------------------------------------------*/

const config = {
    useNewUrlParse: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}



/*------------------------------------------------------------
Making Database Connection
------------------------------------------------------------*/

mongoose.connect(MONGODB_URL, config)



/*------------------------------------------------------------
Handling Connection Events
------------------------------------------------------------*/

mongoose.connection
//event for when connection open
.on('open', () => log.green('STATUS', 'Connected to MongoDB'))

//event for connection closed
.on('close', () => log.red('STATUS', 'Disconnected from MongoDB'))

//event for connection error
.on('error', (error) => log.red('ERROR', error))



/*------------------------------------------------------------
Export the connection
------------------------------------------------------------*/
module.exports = mongoose