const Sequelize = require("sequelize");
const db = require("../index");

const Transaction = db.define("transaction", {
  transactionId: {
    type: Sequelize.INTEGER
  }
});

module.exports = Transaction;
