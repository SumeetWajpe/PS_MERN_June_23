import { gql } from "@apollo/client";

// export const GET_ALL_PRODUCTS = gql`
//   query GetAllProducts {
//     products {
//       id
//       title
//       price
//       likes
//       imageUrl
//       rating
//       description
//     }
//   }
// `;

// with pagination
export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts($limit: Int, $offset: Int) {
    products(limit: $limit, offset: $offset) {
      id
      title
      price
      likes
      imageUrl
      rating
      description
    }
  }
`;
