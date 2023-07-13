import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typedefs.js";
import { resolvers } from "./schema/resolvers.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGODB_CONNECTION_STR || "", {});
mongoose.connection.on("open", () => {
  console.log("Onlineshoppingdb connected successfully !");
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: +process.env.PORT },
});

console.log(`🚀 Server ready at ${url}`);
