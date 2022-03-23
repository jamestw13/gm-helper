const { Character, User, Campaign } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('campaigns')
          .populate('characters');
        return userData;
      }
      throw new AuthenticationError('Not logged in.');
    },

    users: async () =>
      User.find()
        .populate('characters')
        .select('-__v -password')
        .populate('campaigns')
        .populate('characters'),

    user: async (parent, { username }) =>
      User.findOne({ username })
        .select('-__v -password')
        .populate('characters')
        .populate('campaigns'),

    campaigns: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Campaign.find(params)
        .populate('players')
        .populate('characters')
        .populate('characters.player')
        .populate('gamemaster');
    },

    campaign: async (parent, { _id }) =>
      Campaign.findOne({ _id }).populate('players').populate('characters'),

    character: async (parent, { _id }) => Character.findOne({ _id }),

    characters: async (parent, { name }) => {
      const params = name ? { name } : {};
      return Character.find(params).populate({
        path: 'player',
        populate: {
          path: 'characters',
          populate: {
            path: 'player',
          },
        },
      });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { user, token };
    },

    addCampaign: async (parent, args, context) => {
      if (context.user) {
        const campaign = await Campaign.create({
          ...args,
          gamemaster: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { campaigns: campaign._id } },
          { new: true }
        );

        return campaign;
      }
      throw new AuthenticationError('Not logged in.');
    },

    addCharacter: async (parent, args, context) => {
      if (context.user) {
        const character = await Character.create({
          ...args,
          player: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { characters: character } },
          { new: true }
        );
      }
      throw new AuthenticationError('Not logged in.');
    },
  },
};

module.exports = resolvers;
