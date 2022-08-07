import React, { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";

// hooks
import useDialog from "../../hooks/useDialog";
import useToast from "../../hooks/useToast";
import useValidateForm from "../../hooks/useValidateForm";
import usePrepareFormState from "./hooks/usePrepareFormState";
import useWarehouses from "../../hooks/useWarehouses";

// models
import { Warehouse } from "../../models/Warehouse";

import "./style.scss";
import Main from "./components/Main";

const Warehouses = () => {
  // hooks
  const { showToast } = useToast();
  const { validationSchema, defaultFormState } = usePrepareFormState();

  // state
  const [selectedRecordType, setSelectedRecordType] = useState<Warehouse>();
  const [recordClicked, setRecordClicked] = useState(-1);
  const [dialogMode, setDialogMode] = useState("");
  const createEditDialog = useDialog({ defaultState: false });
  const deleteDialog = useDialog({ defaultState: false });

  const { formik } = useValidateForm({
    defaultFormState,
    validationSchema,
    onSubmit: (group) => {
      if (dialogMode === DialogModes.CREATE) {
        createAdminGroup.mutate(
          {
            payload: group,
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries(ReactQueryKeys.ADMIN_GROUPS);
              setSelectedRecordType(selectedRecordType);
              setRecordClicked(selectedRecordType.id);

              showToast({
                summary: "Success",
                severity: "success",
                detail: "Group created successfully.",
              });

              formik.resetForm();
            },
            onError: (error: any) => {
              showToast({
                severity: "error",
                summary: "Error",
                detail: error.message,
              });
            },
            onSettled: () => {
              createEditDialog.hide();
            },
          }
        );
      } else if (dialogMode === DialogModes.EDIT) {
        updateAdminGroup.mutate(
          {
            groupId: selectedRecordType?.id,
            payload: group,
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries(ReactQueryKeys.ADMIN_GROUPS);
              setSelectedRecordType(selectedRecordType);
              setRecordClicked(selectedRecordType.id);
              showToast({
                severity: "success",
                summary: "Successful",
                detail: "Group updated successfully.",
              });
            },
            onError: (error: any) => {
              showToast({
                severity: "error",
                summary: "Error",
                detail: error.message,
              });
            },
            onSettled: () => {
              createEditDialog.hide();
            },
          }
        );
      }
    },
  });

  return (
    <div className="Container">
      <Sidebar
        {...{
          setRecordClicked,
          recordClicked,
          createEditDialog,
          deleteDialog,
          setDialogMode,
          formik,
        }}
      />
      {recordClicked > -1 && <Main {...{ recordClicked }} />}
    </div>
  );
};

export default Warehouses;
