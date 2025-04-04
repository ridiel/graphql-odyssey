const gql = require("graphql-tag");

const schemaTypeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

  "Group of modules that teaches about specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = schemaTypeDefs;
