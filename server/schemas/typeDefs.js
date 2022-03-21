const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    users: [User]
    user(username: String!): User
    characters: [Character]
    character(_id: ID!): Character
  }

  type User {
    _id: ID
    username: String
    email: String
    characters: [Character]
  }

  type Character {
    _id: ID
    name: String
    race: String
    class: String
    level: Int
  }
  type Mutation {
    addUser(username: String!, email: String!): User
    addCharacter(
      name: String!
      race: String!
      class: String!
      level: Int
    ): Character
  }
`;

module.exports = typeDefs;
