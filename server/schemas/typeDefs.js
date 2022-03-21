const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    characters(name: String): [Character]
  }

  type Character {
    _id: ID
    name: String
    race: String
    class: String
    level: Int
  }
  #  type Mutation {
  #    createCharacter(name: String): Character
  #  }
`;

module.exports = typeDefs;
