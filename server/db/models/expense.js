const Sequelize = require('sequelize');
const db = require('../index');

const Expense = db.define('expense', {
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  value: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Expense;
