const { faker } = require('@faker-js/faker');
const { User, Campaign, Character } = require('../models');

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

/*------------------------------------*/
/*- Seed Characters ------------------*/
/*------------------------------------*/

module.exports = async function seedCharacters() {
  const createdUsers = await User.find();

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
};
