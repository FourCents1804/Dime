const db = require("../db");
const { User } = require("../db/models");
// const userData = require("./userMock");

const data = [
  {
    email: "cody@gmail.com",
    password: "123",
    firstName: "Sandra",
    lastName: "Boas-Du Pree",
    occupation: "Admin Staff Asst",
    monthlyIncome: 5516.8,
    age: 40,
    gender: "Male",
    savingsGoal: 521
  }
];

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const userPromises = [];
  for (let i = 0; i < data.length; i++) {
    let newUser = User.create(data[i]);
    await userPromises.push(newUser);
  }
  await Promise.all(userPromises);

  console.log(`seeded ${data.length} users`);
  console.log(`seeded successfully`);
}

if (module === require.main) {
  seed()
    .catch(err => {
      console.error(err);
      process.exitCode = 1;
    })
    .then(() => {
      console.log("closing db connection");
      db.close();
      console.log("db connection closed");
    });

  console.log("seeding...");
}

module.exports = seed;
