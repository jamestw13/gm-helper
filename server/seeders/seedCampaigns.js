const { faker } = require('@faker-js/faker');
const { User, Campaign, Character } = require('../models');

/*------------------------------------*/
/*- Seed Campaigns -------------------*/
/*------------------------------------*/

module.exports = async function seedCampaigns() {
  const createdUsers = await User.find();
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
    });

    const characterList = [];

    players.forEach(async player => {
      await User.findOne({ _id: player }, { characters: 1 })
        .then(characterData =>
          faker.random.arrayElement(characterData.characters)
        )
        .then(async character => {
          console.log(
            `playerId: ${player}
              characterId: ${character}
              createdCampaign: ${createdCampaign._id}`
          );
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
};
