import * as Yup from "yup";

const usePrepareFormState = () => {
  const defaultFormState = {
    warehouse_id: null,
    product: { id: null, name: "", description: "", created_at: "" },
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    capacity: Yup.number().required("Capacity is required!"),
  });

  return { defaultFormState, validationSchema };
};

export default usePrepareFormState;
