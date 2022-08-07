import * as Yup from "yup";
import { Warehouse } from "../../../models/Warehouse";

const usePrepareFormState = () => {
  const defaultFormState: Partial<Warehouse> = {};

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    description: Yup.string().required("Description is required!"),
  });

  return { defaultFormState, validationSchema };
};

export default usePrepareFormState;
