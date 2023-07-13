import { gql } from "@apollo/client";

export const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($deleteProductId: ID!) {
    deleteProduct(id: $deleteProductId)
  }
`;