const sequelize = require('../database/config/connection')


async function synchronizing(){
    await sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });
    
    await sequelize.sync({ force: false })
}
module.exports = synchronizing