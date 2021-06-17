const { gql } = require('apollo-server');

const typeDefs = gql`
    #Artist type
    type Artist {
        id: ID,
        name: String!,
        popularity: Int,
        generation: Int,
        order: Int,
        genres: [String!]!,
        next: [Artist],
        prev: [Artist]
    }

    type Query {
        artistFromId(id: ID): Artist!,
        artistFromName(name: String): Artist!
    }

    type Mutation {
        addArtist(name: String!, genres: [String!]!): Artist
    }
`;

module.exports = typeDefs;