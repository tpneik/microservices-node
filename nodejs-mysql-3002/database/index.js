// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('credential_and_orderservice', 'mysqldata', 'mysqlpasswd', {
//   host: 'mysql',
//   dialect: 'mysql',
//   logging: false 
// });
const sequelize = require('./config/connection')

async function synchronizing() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: false });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to create table :', error);
  }
}

module.exports = { 
    sequelize,
    synchronizing: synchronizing,
};