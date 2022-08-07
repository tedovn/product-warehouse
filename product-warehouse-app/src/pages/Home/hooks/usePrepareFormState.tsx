import * as Yup from "yup";
import { Product } from "../../../models/Product";

const usePrepareFormState = () => {
  const defaultFormState: Partial<Product> = {};

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    description: Yup.string().required("Description is required!"),
    type: Yup.string(),
  });

  return { defaultFormState, validationSchema };
};

export default usePrepareFormState;
