const Sequelize = require("sequelize")
const db = require('../db')
const { STRING, BOOLEAN, FLOAT, ENUM } = Sequelize

const Order = db.define('order', {
    isPaid: {
        type: BOOLEAN,
        defaultValue: false
    },
    total: {
        type: FLOAT
    },
    paymentMethod: {
        type: ENUM('credit', 'cash'),
        defaultValue: 'credit'
    },
    ccNumber: {
        type: STRING
    },
    shippingAddress: {
        type: STRING
    },
    shippingMethod: {
        type: ENUM('ground', 'express'),
        defaultValue: 'ground'
    }
})

module.exports = { Order }
