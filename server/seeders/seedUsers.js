const { faker } = require('@faker-js/faker');
const { User, Campaign, Character } = require('../models');

/*------------------------------------*/
/*- Seed Users -----------------------*/
/*------------------------------------*/

module.exports = async function seedUsers() {
  const userData = [];

  for (let i = 0; i < 50; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);

    userData.push({ username, email });
  }

  await User.insertMany(userData);
};
