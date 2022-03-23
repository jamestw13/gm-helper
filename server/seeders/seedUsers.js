const { faker } = require('@faker-js/faker');
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const NUM_USERS = 50;

/*------------------------------------*/
/*- Seed Users -----------------------*/
/*------------------------------------*/

module.exports = async function seedUsers() {
  const userData = [];

  for (let i = 0; i < NUM_USERS; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  try {
    await User.insertMany(userData);

    console.log(`${NUM_USERS} users seeded.`);
  } catch {
    throw new AuthenticationError('Issue seeding users');
  }
};
