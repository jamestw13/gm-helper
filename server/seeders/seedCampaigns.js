const { faker } = require('@faker-js/faker');
const { AuthenticationError } = require('apollo-server-express');
const { User, Campaign } = require('../models');

const NUM_CAMPAIGNS = 50;
/*------------------------------------*/
/*- Seed Campaigns -------------------*/
/*------------------------------------*/

module.exports = async function seedCampaigns() {
  try {
    const createdUsers = await User.find();
    for (let i = 0; i < NUM_CAMPAIGNS; i++) {
      // select 1-5 users
      const randomUserCount = Math.floor(Math.random() * 5) + 1;

      const players = [];
      for (let j = randomUserCount; j > 0; j--) {
        const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
        const { _id: userId } = createdUsers[randomUserIndex];

        players.push(userId);
      }

      // campaign name
      const name = `${faker.lorem.word()} ${faker.lorem.word()}`;

      // First user in player array is gm. Rest are players
      const gamemaster = players.pop();

      // Create campaign
      const createdCampaign = await Campaign.create({
        name,
        gamemaster,
      });

      players.push(gamemaster);

      players.forEach(async player => {
        await User.findOne({ _id: player }, { characters: 1 })
          .then(characterData =>
            faker.random.arrayElement(characterData.characters)
          )
          .then(async character => {
            if (character) {
              await Campaign.updateOne(
                { _id: createdCampaign },
                { $push: { characters: character, players: player } }
              );
              await User.updateOne(
                { _id: player },
                {
                  $push: {
                    campaigns: createdCampaign._id,
                  },
                }
              );
            }
          });
      });
    }
    console.log(`${NUM_CAMPAIGNS} Campaigns seeded.`);
  } catch {
    throw new AuthenticationError('Issue seeding campaigns');
  }
};
