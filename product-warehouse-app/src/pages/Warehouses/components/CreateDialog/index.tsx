import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { CheckboxChangeParams } from "primereact/checkbox";
import InputField from "../../../../components/input-field/InputField";
import Dialog from "../../../../components/Dialog";
import Checkbox from "../../../../components/checkbox/Checkbox";

// hooks
import usePrepareFormState from "../../hooks/usePrepareFormState";
import useValidateForm from "../../../../hooks/useValidateForm";
import useWarehouseMutation from "../../../../hooks/useWarehouseMutation";
import useToast from "../../../../hooks/useToast";

// models
import { Type } from "../../../../models/Product";

import "./style.scss";
import useWarehouses from "../../../../hooks/useWarehouses";

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
  const { createWarehouse } = useWarehouseMutation();
  const { refetchWarehouses } = useWarehouses();
  const { defaultFormState, validationSchema } = usePrepareFormState();
  const { formik } = useValidateForm({
    defaultFormState,
    validationSchema,
    onSubmit: (warehouse) => {
      const { name, capacity } = warehouse;

      createWarehouse({
        variables: {
          name,
          capacity,
          type: hazardous ? Type.Hazardous : Type.Nonhazardous,
        },
        onCompleted: () => {
          refetchWarehouses();
          formik.resetForm();
          hide();
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
      header="New warehouse"
      showHeader={false}
      className="create-dialog"
      closable={false}
      onHide={onHide}
      onShow={show}
    >
      <div className="reassign-dialog-content">
        <p className="dialog-header">
          New warehouse
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
            id="capacity"
            label="Capacity"
            name="capacity"
            type="number"
            min={1}
            error={formik.errors.capacity}
            value={formik.values.capacity}
            onChange={formik.handleChange}
            placeholder="Enter capacity"
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
              Is warehouse hazardous
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
