import { ProductModel, productsData } from "../models/products.model.js";

// Resolvers -> extract the data  &  return the data
// data?? -> database | rest api |  microservice | cms
export const resolvers = {
  Query: {
    products: (): ProductModel[] => productsData.products,
    product: (_, { id }: { id: number }): ProductModel => {
      return productsData.products.find(p => p.id === +id);
    },
  },
};
