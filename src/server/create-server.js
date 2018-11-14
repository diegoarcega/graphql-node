const { GraphQLServer } = require('graphql-yoga')
const Mutation = require('../graphql/resolvers/Mutation')
const Query = require('../graphql/resolvers/Query')
const typeDefs = require('../graphql/type/type')

module.exports =  () => new GraphQLServer({
    typeDefs,
    resolvers: {
        Mutation,
        Query,
    },
    resolverValidationOptions: {
        requireResolversForResolveType: false,
    },
})
