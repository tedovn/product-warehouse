import { FormikHelpers, useFormik } from "formik";
import { validateFn } from "../utils";

interface IValidationFormProps<T> {
  defaultFormState: T;
  validations?: object[];
  validationSchema?: any;
  onSubmit: (data: T, formikHelpers: FormikHelpers<T>) => void;
}

const useValidateForm = <T extends {}>({
  defaultFormState,
  validations,
  validationSchema,
  onSubmit,
}: IValidationFormProps<T>) => {
  const formik: any = useFormik({
    initialValues: defaultFormState,
    validateOnChange: false,
    enableReinitialize: true,
    validationSchema,
    validate: validations
      ? (data: any) => validateFn(data, validations)
      : undefined,
    onSubmit,
  });

  return {
    formik,
  };
};

export default useValidateForm;
