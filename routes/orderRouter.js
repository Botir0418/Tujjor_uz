const router = require('express').Router()
const orderController = require('../controller/orderController')


router.post('/orders', orderController.addOrder);
router.get('/orders', orderController.getAllOrders);
router.get('/new-orders', orderController.getByNewOrder);
router.put('/order/:id', orderController.updateOrder);
router.delete('/order/:id', orderController.deleteOrder);
router.get('/orders/status', orderController.getStatus)

module.exports = router;
