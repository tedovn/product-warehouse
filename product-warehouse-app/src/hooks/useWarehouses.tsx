import { useQuery, useMutation } from "@apollo/client";
import useToast from "./useToast";
import { Warehouses } from "../models/Warehouse";

import { FETCH_WAREHOUSES } from "../schemas/warehouse";

const useWarehouses = () => {
  const { showToast } = useToast();

  const { data, refetch } = useQuery<Warehouses>(FETCH_WAREHOUSES, {
    onError: (error) => {
      showToast({
        severity: "error",
        summary: "Error",
        detail: error.message,
      });
    },
  });

  return {
    warehouses: data?.warehouses || [],
    refetchWarehouses: refetch,
  };
};

export default useWarehouses;
