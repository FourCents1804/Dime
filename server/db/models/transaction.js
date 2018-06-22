const Sequelize = require("sequelize");
const db = require("../index");

const Transaction = db.define("transaction", {
});

module.exports = Transaction;
