//import your db
const { db } = require('./db')
//import your models
const { User } = require('./models/User')
const { Costume } = require('./models/Costume')
const { Category } = require('./models/Category')
const { Order } = require('./models/Order')
const { Session } = require('./models/Session')

const { NamedModulesPlugin } = require('webpack')

//state your model associations (hasOne etc)
Costume.belongsTo(Category)
Category.hasMany(Costume)

User.hasMany(Order)
Order.belongsTo(User)

Costume.belongsToMany(Order, { through: 'lineitem' })
Order.belongsToMany(Costume, { through: 'lineitem' })

User.hasOne(Session)
Session.belongsTo(User)

//export your db and Models (so they all can be imported from a single central location)
module.exports = { db, User, Costume, Category, Order, Session }
