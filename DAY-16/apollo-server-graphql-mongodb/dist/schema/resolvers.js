import ProductModel from "../models/products.model.js";
// Resolvers -> extract the data  &  return the data
// data?? -> database | rest api |  microservice | cms
export const resolvers = {
    Query: {
        products: async (_, { limit, offset }) => await ProductModel.find({}).sort({ title: 1 }).skip(offset).limit(limit),
        product: async (_, { id }) => {
            return await ProductModel.findOne({ id });
        },
    },
    Mutation: {
        deleteProduct: async (_, { id }) => {
            await ProductModel.deleteOne({ id });
            return id;
        },
    },
};
