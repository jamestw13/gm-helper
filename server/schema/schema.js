const graphql = require('graphql');

const { graphQLObjectType } = graphql;

const BookType = new graphql.GraphQLObjectType({
  name: 'Book',
});
