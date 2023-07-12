import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const typeDefs = `#graphql

    #rootQuery
    type Query{
        products:[Product] # [] -> collection | array
    }
 # ! -> not null constraint
    type Product{
        id:ID!,
        title:String
        price:Int
    }

`;
let productsData = [
    { id: 1, title: "Laptop", price: 25000 },
    { id: 2, title: "Watch", price: 2500 },
];
const resolvers = {
    Query: {
        products: () => productsData,
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
