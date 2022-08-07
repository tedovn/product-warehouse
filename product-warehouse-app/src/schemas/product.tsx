import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
  query FetchProducts {
    products {
      id
      name
      description
      type
      created_at
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: Int!) {
    deleteProduct(id: $id)
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $description: String
    $type: ProductType!
  ) {
    createProduct(
      product: { name: $name, description: $description, type: $type }
    ) {
      id
    }
  }
`;
