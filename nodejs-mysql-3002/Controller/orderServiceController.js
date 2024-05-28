const OrderService = require('../database/models/orderService')
const { isProductExist } = require('../database/constrain/constrain');

async function createOrder(req, res){
    try {
        console.log(`Someone is calling createOrder`)
        const { userId, productCode, quantity } =  req.body
        const productName = ""
        console.log([ userId, productCode, quantity ])
        if(!(await isProductExist(productCode))){
            console.log(`Calling createOrder failed`)
            res.status(201).json({ error: "Error creating orderService" });
        }
        const orderService = await OrderService.create({userId, productCode, productName, quantity})
        console.log(`Calling createOrder successfully`)
        res.status(201).json(orderService);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: "Error creating order" });
    }
}
async function getAllOrder(req, res){
    try {
        console.log(`Someone is calling getAllOrder`)
        const order = await OrderService.findAll()
        console.log(`Calling getAllOrder successfully`)
        res.status(200).json(order);
    } catch (error) {
        console.error("Error retriving order:", error);
        res.status(500).json({ error: "Error" });
    }
}

module.exports = {
    createOrder,
    getAllOrder
}