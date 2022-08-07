import React, { useEffect } from "react";
import { Dialog as PDialog, DialogProps } from "primereact/dialog";
import "./style.scss";

type ComponentProps = DialogProps & {
  children?: React.ReactNode;
  customWidth?: string;
};

const defaultProps = {
  children: null,
  customWidth: "auto",
};

const Dialog: React.FC<ComponentProps> = (
  props: ComponentProps
): JSX.Element => {
  const {
    visible,
    onHide,
    onShow,
    header,
    children,
    className = "custom-dialog",
    customWidth,
    footer = null,
    position = "center",
    closable = true,
    showHeader = true,
  } = props;

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  return (
    <div className="dialog" data-testid="dialog">
      <PDialog
        visible={visible}
        style={{ width: customWidth }}
        onHide={onHide}
        onShow={onShow}
        position={position}
        header={header}
        footer={footer}
        closable={closable}
        className={className}
        showHeader={showHeader}
        modal
      >
        {children}
      </PDialog>
    </div>
  );
};

Dialog.defaultProps = defaultProps;

export default Dialog;
