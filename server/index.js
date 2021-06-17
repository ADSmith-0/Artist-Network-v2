const { ApolloServer, gql } = require('apollo-server');

const typeDefs = require('./apollo/typeDefs');
const resolvers = require('./apollo/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`🚀 Server running at ${url}`));