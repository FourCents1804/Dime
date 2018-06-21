const db = require('../db');
const { User } = require('../db/models');
const userData = require('./userMock');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const userPromises = [];
  for (let i = 0; i < userData.length; i++) {
    let newUser = User.create(userData[i]);
    await userPromises.push(newUser);
  }
  await Promise.all(userPromises);

  console.log(`seeded ${userData.length} users`);
  console.log(`seeded successfully`);
}

if (module === require.main) {
  seed()
    .catch(err => {
      console.error(err);
      process.exitCode = 1;
    })
    .then(() => {
      console.log('closing db connection');
      db.close();
      console.log('db connection closed');
    });

  console.log('seeding...');
}

module.exports = seed;
