const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { User, Campaign, Character } = require('../models');

const seedUsers = require('./seedUsers');
const seedCharacters = require('./seedCharacters');
const seedCampaigns = require('./seedCampaigns');

async function seed() {
  await User.deleteMany({});
  await Campaign.deleteMany({});
  await Character.deleteMany({});

  await seedUsers();
  await seedCharacters();
  await seedCampaigns();

  console.log('Finished seeding');
  process.exit(0);
}

seed();
