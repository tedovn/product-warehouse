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
import DropdownInputField from "../../../../components/dropdown-input-field/DropdownInputField";

type ComponentProps = React.PropsWithChildren<{
  isVisible: boolean;
  onShow?: () => void;
  onCancel?: () => void;
  hide: () => void;
}>;

const ImportDialog: React.FC<ComponentProps> = (
  props: ComponentProps
): JSX.Element => {
  const { isVisible, onShow, onCancel, hide } = props;
  const [hazardous, setHazardous] = useState(false);

  const { showToast } = useToast();
  const { products } = useProducts();
  const { defaultFormState, validationSchema } = usePrepareFormState();
  const { formik } = useValidateForm({
    defaultFormState,
    validationSchema,
    onSubmit: (product) => {
      console.info({ product });

      // createProduct({
      //   variables: {
      //     name,
      //     description,
      //     type: hazardous ? Type.Hazardous : Type.Nonhazardous,
      //   },
      //   onCompleted: () => {
      //     formik.resetForm();
      //     hide();
      //     showToast({
      //       severity: "success",
      //       summary: "Success",
      //       detail: "Successfully delete product!",
      //     });
      //   },
      //   onError: (error) => {
      //     showToast({
      //       severity: "error",
      //       summary: "Error",
      //       detail: error.message,
      //     });
      //   },
      // });
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

  const handleOrganizationChange = (event: any) => {
    const productIndex = products.findIndex(
      (record) => record.id === event.value
    );

    formik.setFieldValue("product", products[productIndex]);
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
          Import product
          <i
            role="button"
            tabIndex={0}
            className="pi pi-times"
            style={{ fontSize: "1.7rem" }}
            onClick={onCancelPress}
          />
        </p>
        <div className="dialog-content">
          <DropdownInputField
            label="Product"
            placeholder="Select organization data set"
            options={products.map((p) => ({ label: p.name, value: p.id }))}
            value={formik.values.product.id}
            onChange={handleOrganizationChange}
            error={formik.errors.product}
          />
          <InputField
            id="amount"
            label="Amount"
            name="amount"
            type="number"
            min={1}
            error={formik.errors.amount}
            value={formik.values.amount}
            onChange={formik.handleChange}
            placeholder="Enter amount"
          />
        </div>
        <div className="reassign-dialog-buttons">
          <Button className="save-button" onClick={formik.handleSubmit}>
            IMPORT
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ImportDialog;
