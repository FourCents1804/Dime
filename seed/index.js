'use strict';

const db = require('../server/db');
const { User, Expense, Purchase, Transaction } = require('../server/db/models');
const purchaseData = require('./purchaseData.js');

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
      savingsGoal: 500
    })
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
        userId: 1
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
  ]);

  const transactions = await Promise.all([
    Transaction.bulkCreate([
      {
        userId: 1,
        createdAt: '2017-07-02'
      },
      {
        userId: 1,
        createdAt: '2017-07-09'
      },
      {
        userId: 1,
        createdAt: '2017-08-01'
      },
      {
        userId: 1,
        createdAt: '2017-08-15'
      },
      {
        userId: 1,
        createdAt: '2017-08-30'
      },
      {
        userId: 1,
        createdAt: '2017-09-12'
      },
      {
        userId: 1,
        createdAt: '2017-10-01'
      },
      {
        userId: 1,
        createdAt: '2017-11-20'
      },
      {
        userId: 1,
        createdAt: '2017-12-20'
      },
      {
        userId: 1,
        createdAt: '2017-02-10'
      },
      {
        userId: 1,
        createdAt: '2017-03-16'
      },
      {
        userId: 1,
        createdAt: '2017-04-20'
      },
      {
        userId: 1,
        createdAt: '2017-05-16'
      },
      {
        userId: 1,
        createdAt: '2017-06-04'
      }
    ])
  ]);

  const purchasesPromises = [];
  for (let i = 0; i < purchaseData.length; i++) {
    let newPurchase = Purchase.create(purchaseData[i]);
    await purchasesPromises.push(newPurchase);
  }
  await Promise.all(purchasesPromises);

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
