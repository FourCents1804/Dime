'use strict';

const db = require('../server/db');
const { User } = require('../server/db/models');


async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({
      firstName: 'john',
      lastName: 'doe',
      email: 'cody@email.com',
      password: '123',
      monthlyIncome: 990,
      occupation: 'Dentist',
      age: 55,
      gender: 'Male',
      savingsGoal: 500,

    }),

  ]);
//   const userPromises = []
//   for (let i = 0; i < userData.length; i++) {
//     let newUser = User.create(userData[i])
//     await userPromises.push(newUser)
//   }
//   await Promise.all(userPromises)


  console.log(`seeded  users`);
  console.log(`seeded successfully`);
}


if (module === require.main) {
  seed()
    .catch(err => {
      console.error(err);
      process.exitCode = 1;
    })
    .then(() => {
      // `finally` is like then + catch. It runs no matter what.
      console.log('closing db connection');
      db.close();
      console.log('db connection closed');
    });

  console.log('seeding...');
}

module.exports = seed;
