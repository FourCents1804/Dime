const Sequelize = require('sequelize');
const db = require('../index');

const Purchase = db.define('purchase', {
  itemName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Purchase;
