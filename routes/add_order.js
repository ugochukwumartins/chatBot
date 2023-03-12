const express= require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/orderController');




orderRouter.get("/getOrder",orderController.getOrder)
orderRouter.post("/createOrder",orderController.order);
module.exports = orderRouter;