const { Character } = require('../models');
// const { AuthenticationError } = require('apollo-server-express');
// const {signToken} = require('../utils/auth')

const resolvers = {
  Query: {
    characters: async (parent, { name }) => {
      const params = name ? { name } : {};
      return Character.find(params);
    },
  },
  // Mutation: {
  //   createCharacter: async ({}) => {

  //     return new Character(id, input);
  //   },
  // },
};

module.exports = resolvers;
