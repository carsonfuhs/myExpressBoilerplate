//import product model
const { findByIdAndUpdate } = require('../models/products')
const Product = require('../models/products')

//controller functions



//index - generates a page of all products
const index = async (req, res) => {

    //get all the products
    const Products = await Product.find({})

    //rendering view
    res.render('products/index', {
        products: Products
    })
}

//show - generates a page of one product
const show = async (req, res) => {
    
    //get ID param
    const id = req.params.id

    //get a product
    const product = await Product.findById(id)

    //render
    res.render('products/show', {
        product
    })
}

//new - adds a new product
const newProduct = async (req, res) => {
    res.render('products/new')
}

//create - generates a page to create a new product
const create = async (req, res) => {

    //adds a new product
    await Product.create(req.body)
    
    res.redirect('/products')
}

//edit - generates a page to edit a product
const edit = async (req, res) => {
     
    //get ID param
    const id = req.params.id

    //get a product
    const product = await Product.findById(id)

    //render
    res.render('products/edit', {
        product
    })
}

//update - generates a page to update a product
const update = async (req, res) => {
    const id = req.params.id

    //update
    await Product.findByIdAndUpdate(id, req.body, {new: true})

    res.redirect('/products/' + id)
}

//destroy - destroys a product
const destroy = async (req, res) => {
    
    const id = req.params.id

    //destroy item
    await Product.findByIdAndDelete(id)
    
    res.redirect('products')
}

//buy
const buy = async (req, res) => {

    //grab id
    const id = req.params.id

    //decrease qty by one
    await Product.findByIdAndUpdate(id, {$inc: {qty: -1}})

    //redirecty back to main
    res.redirect('/products')

}

//export functions
module.exports = {
    index,
    show,
    newProduct,
    create,
    edit,
    update,
    destroy,
    buy,
}