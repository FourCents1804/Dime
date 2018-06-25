/* global describe beforeEach it */

const { expect } = require("chai");
const db = require("../index");
const User = require("./user");

describe("▒▒▒ Model tests ▒▒▒", () => {
  beforeEach("Synchronize and clear database", () => db.sync({ force: true }));

  after("Synchronize and clear database", () => db.sync({ force: true }));

  describe("Sequelize models", function() {
    let user;
    beforeEach("Creates user", () =>
      User.create({
        email: "cody@gmail.com",
        password: "123",
        firstName: "Sandra",
        lastName: "Boas-Du Pree",
        occupation: "Admin Staff Asst",
        monthlyIncome: 5516.8,
        age: 40,
        gender: "Female",
        savingsGoal: 521
      }).then(newUser => (user = newUser))
    );

    describe("User Model", () => {
      it("has the expected schema definition", () => {
        expect(user.email).to.be.an("string");
        expect(user.monthlyIncome).to.be.an("number");
      });

      it("has the length", async () => {
        const users = await User.findAll();
        expect(users.length).to.equal(1);
      });

      it("can have multiple users", async () => {
        await User.findOrCreate({
          where: {
            email: "jim@gmail.com",
            password: "1234",
            firstName: "Jim",
            lastName: "Gordon",
            occupation: "Software Engineer",
            monthlyIncome: 4602.2,
            age: 31,
            gender: "Male",
            savingsGoal: 700
          }
        });
        const allUser = await User.findAll();
        expect(allUser.length).to.equal(2);
      });

      it("must have valid value for email", async () => {
        const validEmail = await User.findOne({
          where: { email: "cody@gmail.com" }
        });
        expect(validEmail.email).to.include("@");
      });
    });
  });
});
