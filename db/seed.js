//import the database connection
const mongoose = require('./connection')



/*------------------------------------------
Import your Models Below
------------------------------------------*/
const Product = require('../models/products')


/*------------------------------------------
Do your database operations in below function
------------------------------------------*/

const seed = async () => {
    
    const product = await Product.create([
        {name: "Scuba Tank",
        description: "For breathing underwater",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaOoXHrdwyG510pDT7H2pUgdo2WIgE7ercu2ryMYUc7P4fqin0EWQ0bOdbw&usqp=CAc",
        price: 10,
        qty: 15},

        {name: "Scuba Regulator",
        description: "Attaches to the tank",
        img: "https://i.imgur.com/oCFsb55.jpeg",
        price: 20,
        qty: 15},
    ])

    mongoose.disconnect()
}

//run seed function
mongoose.connection.on('open', () => {
    seed()
})
