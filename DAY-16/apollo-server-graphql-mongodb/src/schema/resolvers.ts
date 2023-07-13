import ProductModel from "../models/products.model.js";
import { generateToken } from "../utils/generateToken.js";

// Resolvers -> extract the data  &  return the data
// data?? -> database | rest api |  microservice | cms
export const resolvers = {
  Query: {
    products: async (
      _,
      { limit, offset }: { limit: number; offset: number },
      ctx,
    ) => {
      console.log(ctx);
      return await ProductModel.find({})
        .sort({ title: 1 })
        .skip(offset)
        .limit(limit); // select * from
    },
    product: async (_, { id }: { id: number }) => {
      return await ProductModel.findOne({ id });
    },
    login: async (_, { uname }: { uname: string }) => {
      let token = await generateToken(uname);
      return {
        uname,
        token,
      };
    },
  },

  Mutation: {
    deleteProduct: async (_, { id }: { id: number }) => {
      await ProductModel.deleteOne({ id });
      return id;
    },
  },
};
