const { gql } = require('apollo-server');

const resolvers = {
    Query: {
        artistFromId: () => console.log('hello'),
        artistFromName: () => console.log('there')
    },

    Mutation: {
        addArtist: () => console.log('hi')
    }
};

module.exports = resolvers;