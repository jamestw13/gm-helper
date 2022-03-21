const { Character, User } = require('../models');
// const { AuthenticationError } = require('apollo-server-express');
// const {signToken} = require('../utils/auth')

const resolvers = {
  Query: {
    users: async () => User.find().populate('characters'),

    user: async () => User.findOne({ username }).populate('characters'),

    character: async (parent, { _id }) => Character.findOne({ _id }),

    characters: async (parent, { name }) => {
      const params = name ? { name } : {};
      return Character.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, args) => await User.create(args),
    addCharacter: async (parent, args) => await Character.create(args),
  },
};

module.exports = resolvers;
