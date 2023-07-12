import { productsData } from "../models/products.model.js";
// Resolvers -> extract the data  &  return the data
// data?? -> database | rest api |  microservice | cms
export const resolvers = {
    Query: {
        products: () => productsData.products,
        product: (_, { id }) => {
            return productsData.products.find(p => p.id === +id);
        },
    },
};
