const productRouter = require('./productRouter')
const reviewRouter = require('./reviewRouter')
module.exports = (app)=>{
    app.use('/product', productRouter)
    app.use('/review', reviewRouter)
}