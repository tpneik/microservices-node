const { DataTypes } = require('sequelize')
const { sequelize } = require('../index');
const User = require('./user')

const orderService = sequelize.define('OrderService', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: User, key: 'id' }
    },
    productCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_name: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = orderService