const { Character } = require('./models');
const { AuthenticationError } = require('apollo-server-express');
// const {signToken} = require('../utils/auth')

const resolvers = {
  Query: {
    characters: async (parent, args, context) => {
      const characterData = await Character.find({});
      return characterData;
    },
  },
};

module.exports = resolvers;
