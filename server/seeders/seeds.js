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
    // campaign name
    const name = `${faker.lorem.word()} ${faker.lorem.word()}`;

    // random user is gamemaster
    const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    const {
      username: gamemaster,
      email,
      _id: userId,
    } = createdUsers[randomUserIndex];

    console.log(userId, email, gamemaster);

    const createdCampaign = await Campaign.create({ name, gamemaster });

    const updatedUser = await User.updateOne(
      { _id: userId },
      {
        $push: {
          campaigns: createdCampaign._id,
        },
      }
    );
    // campaignData.push({ gamemaster, name });
  }

  // const createdCampaigns = await Campaign.collection.insertMany(campaignData);

  // console.log(await Campaign.find());

  /* Make Characters */
  const characterData = [];

  console.log('Finished seeding');
  process.exit(0);
});
