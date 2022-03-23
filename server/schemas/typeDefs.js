const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    campaigns: [Campaign]
    campaign(_id: ID!): Campaign
    characters: [Character]
    character(_id: ID!): Character
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
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

  type Auth {
    token: ID!
    user: User
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

  type User {
    _id: ID
    username: String
    email: String
    campaigns: [Campaign]
    characters: [Character]
    characterCount: Int
    campaignCount: Int
  }
`;

module.exports = typeDefs;
