"use strict";

const User = require('./user');
const Purchase = require('./purchase')
const Transaction = require('./transaction')
// const Expense = require('./expense')

Purchase.belongsTo(Transaction)
Transaction.hasMany(Purchase)
Transaction.belongsTo(User)
User.hasMany(Transaction)
// Expense.belongsTo(User)
// User.hasMany(Expense)

module.exports = {
  User,
  Purchase,
  Transaction,
  // Expense
};
