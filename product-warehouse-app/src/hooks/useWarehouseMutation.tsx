import { useMutation } from "@apollo/client";

import { CREATE_WAREHOUSE, DELETE_WAREHOUSE } from "../schemas/warehouse";

const useWarehouse = () => {
  const [deleteWarehouse] = useMutation(DELETE_WAREHOUSE);
  const [createWarehouse] = useMutation(CREATE_WAREHOUSE);

  return {
    deleteWarehouse,
    createWarehouse,
  };
};

export default useWarehouse;
