/* ----------------------------------------------- 
Dependencies
----------------------------------------------- */
const {model, Schema} = require('../db/connection')


/* ----------------------------------------------- 
Create our Schema
----------------------------------------------- */
const productSchema = new Schema({
    name: String,
    description: String,
    img: String, //image url
    price: Number,
    qty: Number,
}, {timestamps: true})


/* ----------------------------------------------- 
Create the Model
----------------------------------------------- */
const Product = model('Product', productSchema)


/* ----------------------------------------------- 
Export the Model
----------------------------------------------- */
module.exports = Product