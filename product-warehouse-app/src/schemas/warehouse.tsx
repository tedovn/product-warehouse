import { gql } from "@apollo/client";

export const GET_WAREHOUSE = gql`
  query GetWarehouse($id: Int!) {
    warehouse(id: $id) {
      id
      name
      capacity
      availableCapacity
      type
      products {
        product_name
        sum
      }
    }
    warehouseHistory(id: $id) {
      id
      product_name
      product_description
      product_quantity
      type
      created_at
    }
  }
`;

export const GET_WAREHOUSE_HISTORY = gql`
  query GetWarehouseHistory($id: Int!) {
    warehouseHistory(id: $id) {
      product_name
      product_description
      product_quantity
      type
    }
  }
`;

export const CREATE_WAREHOUSE = gql`
  mutation CreateWarehouse($name: String!, $capacity: Int!) {
    createWarehouse(warehouse: { name: $name, capacity: $capacity }) {
      id
    }
  }
`;

export const FETCH_WAREHOUSES = gql`
  query FetchWarehouses {
    warehouses {
      id
      name
      capacity
      type
    }
  }
`;

export const DELETE_WAREHOUSE = gql`
  mutation DeleteWarehouse($id: Int!) {
    deleteWarehouse(id: $id)
  }
`;
