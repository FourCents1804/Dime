const Sequelize = require('sequelize');
const db = require('../index');

const Purchase = db.define('purchase', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  categoryBroad: {
    type: Sequelize.STRING,
    allowNull: false
  },
  categoryDetailed: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Purchase;
