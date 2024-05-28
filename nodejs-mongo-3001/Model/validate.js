require('dotenv').config()
const axios = require('axios')

module.exports = {
    isUserExist
}

async function isUserExist(UserId){

    try {
        console.log(`Someone is calling isUserExist`)
        const link = (`http://localhost:${process.env.PORT_NODE_MYSQL}/user/getUserId/${UserId}`)
        console.log(`Link: ${link}`)
        const is200 = await axios.get(link)
        console.log(`is200---${is200.status}-----`)
        if ( is200.status == 200){
            return true
        }
        return false
        
    } catch (error) {
        console.log(error)
        return false
    }    
}

