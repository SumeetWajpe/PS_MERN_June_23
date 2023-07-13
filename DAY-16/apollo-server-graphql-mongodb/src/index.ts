import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typedefs.js";
import { resolvers } from "./schema/resolvers.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { verifyToken } from "./utils/verifyToken.js";

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
  context: async ({ req, res }) => {
    try {
      // console.log("Executed on every request !");
      const authHeader = req.headers.authorization;
      const token = authHeader.split(" ")[1];
      if (token) {
        const header = req.headers.authorization;
        let user = await verifyToken(header);
        return { user };
      }
      return {};
    } catch (error) {
      console.log(error);
    }
  },
});

console.log(`🚀 Server ready at ${url}`);
