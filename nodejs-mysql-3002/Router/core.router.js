const userRouter = require('./userRouter')
const orderServiceRouter = require('./orderServiceRouter')
module.exports = (app) =>{
    app.use('/user', userRouter)
    app.use('/order', orderServiceRouter)
}