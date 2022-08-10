import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

// hooks
import useDialog from "../../hooks/useDialog";
import useToast from "../../hooks/useToast";
import useValidateForm from "../../hooks/useValidateForm";
import usePrepareFormState from "./hooks/usePrepareFormState";

// models
import { Warehouse } from "../../models/Warehouse";

import "./style.scss";
import Main from "./components/Main";
import ImportDialog from "./components/ImportDialog";
import ExportDialog from "./components/ExportDialog";
import CreateDialog from "./components/CreateDialog";
import DeleteDialog from "./components/DeleteDialog";
import useWarehouseMutation from "../../hooks/useWarehouseMutation";
import useWarehouses from "../../hooks/useWarehouses";

enum DialogModes {
  CREATE = "create",
  EDIT = "edit",
}

const Warehouses = () => {
  // hooks
  const { showToast } = useToast();
  const { deleteWarehouse } = useWarehouseMutation();
  const { refetchWarehouses } = useWarehouses();

  // state
  const [recordClicked, setRecordClicked] = useState(-1);
  const [dialogMode, setDialogMode] = useState("");

  const createEditDialog = useDialog({ defaultState: false });
  const deleteDialog = useDialog({ defaultState: false });

  const importDialog = useDialog({ defaultState: false });
  const exportDialog = useDialog({ defaultState: false });

  const removeProduct = () => {
    deleteWarehouse({
      variables: { id: recordClicked },
      onCompleted: () => {
        refetchWarehouses();
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
  };

  return (
    <div className="Container">
      <Sidebar
        {...{
          setRecordClicked,
          recordClicked,
          createEditDialog,
          deleteDialog,
          setDialogMode,
        }}
      />
      {recordClicked > -1 && (
        <Main {...{ recordClicked, importDialog, exportDialog }} />
      )}
      <ImportDialog
        {...{
          isVisible: importDialog.isVisible,
          hide: importDialog.hide,
        }}
      />
      <ExportDialog
        {...{
          isVisible: exportDialog.isVisible,
          hide: exportDialog.hide,
        }}
      />
      <CreateDialog
        {...{
          isVisible: createEditDialog.isVisible,
          hide: createEditDialog.hide,
        }}
      />
      <DeleteDialog
        {...{
          isVisible: deleteDialog.isVisible,
          hide: deleteDialog.hide,
          onDelete: removeProduct,
        }}
      />
    </div>
  );
};

export default Warehouses;
