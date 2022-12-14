import * as Yup from "yup";
import { Warehouse } from "../../../models/Warehouse";

const usePrepareFormState = () => {
  const defaultFormState: Partial<Warehouse> = {};

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    capacity: Yup.number().required("Capacity is required!"),
  });

  return { defaultFormState, validationSchema };
};

export default usePrepareFormState;
