import { ProductModel, productsData } from "../models/products.model.js";
import { ReviewModel, reviewsData } from "../models/reviews.model.js";

// Resolvers -> extract the data  &  return the data
// data?? -> database | rest api |  microservice | cms
export const resolvers = {
  Query: {
    products: (): ProductModel[] => productsData.products,
    product: (_, { id }: { id: number }): ProductModel => {
      return productsData.products.find(p => p.id === +id);
    },
    reviews: (): ReviewModel[] => reviewsData.reviews,
    review: (_, { id }: { id: number }): ReviewModel => {
      console.log("Within Review with ID resolver");
      return reviewsData.reviews.find(r => r.id === +id);
    },
  },
  Review: {
    product: (parent: ReviewModel) => {
      console.log("Within Review:product resolver !");

      let theProduct = productsData.products.find(
        p => p.id == parent.productId,
      );
      return theProduct;
    },
  },
  Mutation: {
    deleteProduct: (_, { id }: { id: number }) => {
      let index: number = productsData.products.findIndex(p => p.id === +id);
      let [deletedProduct] = productsData.products.splice(index, 1); // splice(index from which item needs to be deleted,no. of items to be deleted)
      return deletedProduct.title;
    },
  },
};
