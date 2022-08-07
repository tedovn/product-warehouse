import React from "react";
import { Button } from "primereact/button";
import Dialog from "../../../../components/Dialog";

import "./style.scss";

type ComponentProps = React.PropsWithChildren<{
  isVisible: boolean;
  onDelete?: () => void;
  onCancel?: () => void;
  hide: () => void;
  hideOnDelete?: boolean;
}>;

const DeleteDialog: React.FC<ComponentProps> = (
  props: ComponentProps
): JSX.Element => {
  const { isVisible, onDelete, onCancel, hide, hideOnDelete = true } = props;

  const onClick = () => {
    if (hideOnDelete) {
      hide();
    }
    if (onDelete) {
      onDelete();
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
  };

  return (
    <Dialog
      visible={isVisible}
      customWidth="43rem"
      header="Delete"
      showHeader={false}
      className="delete-dialog"
      closable={false}
      onHide={onHide}
    >
      <div className="delete-dialog-content">
        <p className="dialog-header">Delete Product</p>
        <div className="dialog-content">
          <p>Are you sure you want to delete this product?</p>
        </div>
        <div className="delete-dialog-buttons">
          <Button className="cancel-button" onClick={onCancelPress}>
            Cancel
          </Button>
          <Button className="delete-button" onClick={onClick}>
            Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
