import { productsData } from "../models/products.model.js";
import { reviewsData } from "../models/reviews.model.js";
// Resolvers -> extract the data  &  return the data
// data?? -> database | rest api |  microservice | cms
export const resolvers = {
    Query: {
        products: () => productsData.products,
        product: (_, { id }) => {
            return productsData.products.find(p => p.id === +id);
        },
        reviews: () => reviewsData.reviews,
        review: (_, { id }) => {
            console.log("Within Review with ID resolver");
            return reviewsData.reviews.find(r => r.id === +id);
        },
    },
    Review: {
        product: (parent) => {
            console.log("Within Review:product resolver !");
            let theProduct = productsData.products.find(p => p.id == parent.productId);
            return theProduct;
        },
    },
};
