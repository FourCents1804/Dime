/* global describe beforeEach it */

const { expect } = require("chai");
const db = require("../index");
const Expense = require("./expense");

describe("▒▒▒ Expense Model Tests ▒▒▒", () => {
  beforeEach("Synchronize and clear database", () => db.sync({ force: true }));

  after("Synchronize and clear database", () => db.sync({ force: true }));

  describe("Sequelize models", function() {
    let expense;
    beforeEach("Creates expense", () =>
      Expense.create({
        category: "Food and Drink",
        value: 82.2
      }).then(newExpense => (expense = newExpense))
    );

    describe("Expense Model", () => {
      it("has the expected schema definition", () => {
        expect(expense.value).to.be.an("number");
        expect(expense.category).to.be.an("string");
      });

      it("has the length", async () => {
        const expenses = await Expense.findAll();
        expect(expenses.length).to.equal(1);
      });

      it("can have multiple expenses", async () => {
        await Expense.findOrCreate({
          where: {
            value: 90.46,
            category: "Clothing and Accessories"
          }
        });
        const allExpenses = await Expense.findAll();
        expect(allExpenses.length).to.equal(2);
      });

      it("Each columns have proper definition type", async () => {
        const isDefTrue = def => {
          if (typeof def === "string" || "number") {
            return true;
          }
          return false;
        };

        const checkExpense = Expense.create({
          value: 18.5,
          category: "Clothing and Accessories"
        });
        expect(isDefTrue(checkExpense.value)).to.equal(true);
        expect(isDefTrue(checkExpense.category)).to.equal(true);
      });
    });
  });
});
