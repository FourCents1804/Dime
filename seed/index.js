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
  ])

  const purchases = await Promise.all([
    Purchase.bulkCreate([
      {
        itemName: 'Mountain Dew',
        category: 'Food and Drink',
        price: 3,
        transactionId: 1,
        createdAt: '2017-07-02'
      },
      {
        itemName: 'Shoes',
        category: 'Shopping',
        price: 50,
        transactionId: 1,
        createdAt: '2017-07-02'
      },
      {
        itemName: 'Kit Kat',
        category: 'Food and Drink',
        price: 1,
        transactionId: 1,
        createdAt: '2017-07-02'
      },
      {
        itemName: 'Taxi',
        category: 'Transportation',
        price: 24,
        transactionId: 2,
        createdAt: '2017-07-09'
      },
      {
        itemName: 'Watch',
        category: 'Shopping',
        price: 100,
        transactionId: 3,
        createdAt: '2017-08-01'
      },
      {
        itemName: 'Headphones',
        category: 'Shopping',
        price: 15,
        transactionId: 4,
        createdAt: '2017-08-15'
      },
      {
        itemName: 'Wine',
        category: 'Food and Drink',
        price: 16,
        transactionId: 5,
        createdAt: '2017-08-30'
      },
      {
        itemName: 'Cheese',
        category: 'Food and Drink',
        price: 5,
        transactionId: 5,
        createdAt: '2017-08-30'
      },
      {
        itemName: 'Taxi',
        category: 'Transportation',
        price: 12,
        transactionId: 6,
        createdAt: '2017-09-12'
      },
      {
        itemName: 'Shirt',
        category: 'Shopping',
        price: 25,
        transactionId: 7,
        createdAt: '2017-10-01'
      },
      {
        itemName: 'Movie',
        category: 'Entertainment',
        price: 15,
        transactionId: 8,
        createdAt: '2017-11-20'
      },
      {
        itemName: 'Gifts',
        category: 'Entertainment',
        price: 15,
        transactionId: 9,
        createdAt: '2017-12-20'
      },
      {
        itemName: 'Dinner',
        category: 'Food and Drink',
        price: 30,
        transactionId: 10,
        createdAt: '2017-02-10'
      },
      {
        itemName: 'Mountain Dew',
        category: 'Food and Drink',
        price: 20,
        transactionId: 11,
        createdAt: '2017-03-16'
      },
      {
        itemName: 'Concert',
        category: 'Entertainment',
        price: 45,
        transactionId: 12,
        createdAt: '2017-04-20'
      },
      {
        itemName: 'Scarf',
        category: 'Shopping',
        price: 10,
        transactionId: 13,
        createdAt: '2017-05-16'
      },
      {
        itemName: 'Taxi',
        category: 'Transportation',
        price: 10,
        transactionId: 14,
        createdAt: '2017-06-04'
      },
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
