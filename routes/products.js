//import 
const router = require('express').Router()
const ProductController = require('../controllers/products')

//index: get /products
router.get('/', ProductController.index)

//new: get /product/new
router.get('/new', ProductController.newProduct)

//create: post /product
router.post('/', ProductController.create)

//index get /product/:id/edit
router.get('/:id/edit', ProductController.edit)

//update: put /product/:id/update
router.put('/:id', ProductController.update)

//destroy: destroy /product/:id
router.delete('/:id', ProductController.destroy)

//buy: buys a product
router.get('/buy/:id', ProductController.buy)

//show: get /product/:id
router.get('/:id', ProductController.show)

//export
module.exports = router