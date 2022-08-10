import { useQuery, useMutation } from "@apollo/client";
import useToast from "./useToast";
import { Warehouse } from "../models/Warehouse";

import {
  CREATE_WAREHOUSE,
  DELETE_WAREHOUSE,
  GET_WAREHOUSE,
  GET_WAREHOUSE_HISTORY,
} from "../schemas/warehouse";

const useWarehouse = (id: number) => {
  const { showToast } = useToast();

  const { data, refetch } = useQuery<{
    warehouse: Warehouse;
    warehouseHistory: any;
  }>(GET_WAREHOUSE, {
    variables: { id },
    onError: (error) => {
      showToast({
        severity: "error",
        summary: "Error",
        detail: error.message,
      });
    },
  });

  const [deleteWarehouse] = useMutation(DELETE_WAREHOUSE);
  const [createWarehouse] = useMutation(CREATE_WAREHOUSE);

  return {
    warehouse: data?.warehouse || {
      name: "",
      capacity: 0,
      availableCapacity: 0,
      type: "",
      products: [],
    },
    warehouseHistory: data?.warehouseHistory || [],
    refetchWarehouse: refetch,
    deleteWarehouse,
    createWarehouse,
  };
};

export default useWarehouse;
