const router = require('express').Router()
const  producControllers = require('../controller/productController')

router.route('/products')
    .post(producControllers.AddProduct)
    .get(producControllers.getProducts)
    .post(producControllers.createProducts)

router.route('/products/:id')
    .delete(producControllers.deleteProducts)
    .put(producControllers.updateProducts)


module.exports = router;