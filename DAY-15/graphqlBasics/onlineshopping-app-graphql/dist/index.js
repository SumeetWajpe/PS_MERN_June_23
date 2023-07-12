import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const typeDefs = `#graphql

    #rootQuery
    type Query{
        hello:String,
        bye:String
    }

`;
const resolvers = {
    Query: {
        hello: () => "Hello GraphQL !",
        bye: () => "Bye Graphql !!!!!",
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀 Server ready at ${url}`);
