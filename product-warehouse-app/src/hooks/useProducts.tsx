import { gql, useQuery, useMutation } from "@apollo/client";
import { Product } from "../models/Product";
import useToast from "./useToast";

import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
} from "../schemas/product";

interface Products {
  products: Product[];
}

const useProducts = () => {
  const { showToast } = useToast();

  const { data, refetch } = useQuery<Products>(FETCH_PRODUCTS, {
    onError: (error) => {
      showToast({
        severity: "error",
        summary: "Error",
        detail: error.message,
      });
    },
  });

  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [createProduct] = useMutation(CREATE_PRODUCT);

  return {
    products: data?.products || [],
    refetchProducts: refetch,
    deleteProduct,
    createProduct,
  };
};

export default useProducts;
