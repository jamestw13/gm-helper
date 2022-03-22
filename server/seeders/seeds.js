const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { User, Campaign, Character } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
  await Campaign.deleteMany({});
  await Character.deleteMany({});

  /* Make Users */
  const userData = [];

  for (let i = 0; i < 50; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);

    userData.push({ username, email });
  }

  const createdUsers = await User.insertMany(userData);

  /* Make Campaigns */
  const campaignData = [];

  for (let i = 0; i < 50; i++) {
    // select 1-5 users
    const randomUserCount = Math.floor(Math.random() * 5) + 1;

    const players = [];
    for (let j = randomUserCount; j > 0; j--) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
      const { _id: userId } = createdUsers[randomUserIndex];

      // ensure no duplicate users
      if (!players.includes(userId)) players.push(userId);
    }

    // campaign name
    const name = `${faker.lorem.word()} ${faker.lorem.word()}`;

    // First user in player array is gm. Rest are players
    const gamemaster = players.pop();

    // Create campaign
    const createdCampaign = await Campaign.create({
      name,
      gamemaster,
      players,
    });

    players.push(gamemaster);

    players.forEach(async player => {
      await User.updateOne(
        { _id: player },
        {
          $push: {
            campaigns: createdCampaign._id,
          },
        }
      );
    });
  }

  /* Make Characters */
  const races = [
    'Android',
    'Human',
    'Kasatha',
    'Lashunta',
    'Shirren',
    'Vesk',
    'Ysoki',
  ];
  const classes = [
    'Envoy',
    'Mechanic',
    'Mystic',
    'Operative',
    'Solarian',
    'Soldier',
    'Technomancer',
  ];
  const characterData = [];

  for (let i = 0; i < 100; i++) {
    const name = `${faker.name.firstName()} ${faker.name.jobType()}`;
    const race = faker.random.arrayElement(races);
    const characterClass = faker.random.arrayElement(classes);
    const level = Math.floor(Math.random() * 20) + 1;

    const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    const { _id: player } = createdUsers[randomUserIndex];

    const createdCharacter = await Character.create({
      name,
      race,
      class: characterClass,
      level,
      player,
    });

    const updatedUser = await User.updateOne(
      { _id: player },
      {
        $push: {
          characters: createdCharacter,
        },
      }
    );
  }

  const createdCharacters = await Character.insertMany(characterData);

  console.log('Finished seeding');
  process.exit(0);
});
