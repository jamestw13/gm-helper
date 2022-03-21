const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    users: [User]
    user(username: String!): User
    campaigns: [Campaign]
    campaign(_id: ID!): Campaign
    characters: [Character]
    character(_id: ID!): Character
  }

  type Mutation {
    addUser(username: String!, email: String!): User
    addCampaign(gamemaster: ID!, name: String!): Campaign
    addCharacter(
      player: ID!
      name: String!
      race: String!
      class: String!
      level: Int
      campaign: ID
    ): Character
  }

  type User {
    _id: ID
    username: String
    email: String
    campaigns: [Campaign]
    characters: [Character]
    characterCount: Int
    campaignCount: Int
  }

  type Campaign {
    _id: ID
    name: String
    gamemaster: User
    players: [User]
    characters: [Character]
  }

  type Character {
    _id: ID
    player: User
    name: String
    race: String
    class: String
    level: Int
  }
`;

module.exports = typeDefs;
