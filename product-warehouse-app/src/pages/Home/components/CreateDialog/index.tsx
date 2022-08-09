import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { CheckboxChangeParams } from "primereact/checkbox";
import InputField from "../../../../components/input-field/InputField";
import Dialog from "../../../../components/Dialog";
import Checkbox from "../../../../components/checkbox/Checkbox";

// hooks
import usePrepareFormState from "../../hooks/usePrepareFormState";
import useValidateForm from "../../../../hooks/useValidateForm";
import useProducts from "../../../../hooks/useProducts";
import useToast from "../../../../hooks/useToast";

// models
import { Type } from "../../../../models/Product";

import "./style.scss";

type ComponentProps = React.PropsWithChildren<{
  isVisible: boolean;
  onShow?: () => void;
  onCancel?: () => void;
  hide: () => void;
}>;

const CreateEditDialog: React.FC<ComponentProps> = (
  props: ComponentProps
): JSX.Element => {
  const { isVisible, onShow, onCancel, hide } = props;
  const [hazardous, setHazardous] = useState(false);

  const { showToast } = useToast();
  const { createProduct, refetchProducts } = useProducts();
  const { defaultFormState, validationSchema } = usePrepareFormState();
  const { formik } = useValidateForm({
    defaultFormState,
    validationSchema,
    onSubmit: (product) => {
      const { name, description } = product;

      createProduct({
        variables: {
          name,
          description,
          type: hazardous ? Type.Hazardous : Type.Nonhazardous,
        },
        onCompleted: () => {
          formik.resetForm();
          hide();
          refetchProducts();
          showToast({
            severity: "success",
            summary: "Success",
            detail: "Successfully delete product!",
          });
        },
        onError: (error) => {
          showToast({
            severity: "error",
            summary: "Error",
            detail: error.message,
          });
        },
      });
    },
  });

  const show = () => {
    if (onShow) {
      onShow();
    }
  };

  const onHide = () => {
    hide();
  };

  const onCancelPress = () => {
    onHide();
    if (onCancel) {
      onCancel();
    }

    formik.resetForm();
  };

  const onProductTypeChange = (ev: CheckboxChangeParams) => {
    setHazardous(ev.target.checked);
  };

  return (
    <Dialog
      visible={isVisible}
      customWidth="43rem"
      header="New product"
      showHeader={false}
      className="create-dialog"
      closable={false}
      onHide={onHide}
      onShow={show}
    >
      <div className="reassign-dialog-content">
        <p className="dialog-header">
          New product
          <i
            role="button"
            tabIndex={0}
            className="pi pi-times"
            style={{ fontSize: "1.7rem" }}
            onClick={onCancelPress}
          />
        </p>
        <div className="dialog-content">
          <InputField
            label="Name"
            id="name"
            name="name"
            placeholder="Name"
            error={formik.errors.name}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <InputField
            id="description"
            label="Description"
            name="description"
            error={formik.errors.description}
            value={formik.values.description}
            onChange={formik.handleChange}
            placeholder="Write a description about the product"
          />
          <div className="product-checkbox">
            <Checkbox
              id="productType"
              inputId="type"
              value="Is product hazardous"
              checked={hazardous}
              onChange={onProductTypeChange}
            ></Checkbox>
            <label htmlFor="type" className="p-checkbox-label">
              Is product hazardous
            </label>
          </div>
        </div>
        <div className="reassign-dialog-buttons">
          <Button className="save-button" onClick={formik.handleSubmit}>
            Save
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default CreateEditDialog;
