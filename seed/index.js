'use strict';

const db = require('../server/db');
const { User, Expense, Purchase, Transaction } = require('../server/db/models');


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

  const expenses = await Promise.all([
    Expense.bulkCreate([
      {
        category: 'rent',
        value: 1100,
        userId: 1
      },
      {
        category: 'electricity',
        value: 50,
        userId: 1
      },
      {
        category: 'transportation',
        value: 125,
        userId: 1,
      },
      {
        category: 'entertainment',
        value: 250,
        userId: 1
      },
      {
        category: 'other',
        value: 300,
        userId: 1
      }
  ])
  ])

  const transactions = await Promise.all([
    Transaction.bulkCreate([
      {
        userId: 1
      },
      {
        userId: 1
      },
      {
        userId: 1
      },
      {
        userId: 1
      }
    ])
  ])

  const purchases = await Promise.all([
    Purchase.bulkCreate([
      {
        itemName: 'Mountain Dew',
        category: 'Food and Drink',
        price: 3,
        transactionId: 1
      },
      {
        itemName: 'Shoes',
        category: 'Shopping',
        price: 50,
        transactionId: 1
      },
      {
        itemName: 'Kit Kat',
        category: 'Food and Drink',
        price: 1,
        transactionId: 1
      },
      {
        itemName: 'Taxi',
        category: 'Transportation',
        price: 24,
        transactionId: 2
      },
      {
        itemName: 'Watch',
        category: 'Shopping',
        price: 100,
        transactionId: 3
      },
      {
        itemName: 'Headphones',
        category: 'Shopping',
        price: 15,
        transactionId: 4
      }
    ])
  ])
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
