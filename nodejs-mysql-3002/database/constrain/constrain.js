const axios = require('axios')

module.exports = {
    isProductExist
}

async function isProductExist(productCode){
    try {
        const is200 = await axios.get(`http://localhost:${process.env.PORT_NODE_MONGODB}/product/${productCode}`)
        if ( await is200.status == 200){
            return true
        }
        return false
    } catch (error) {
        console.log(error)
        return false
    }
}
