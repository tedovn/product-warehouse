import { Button } from "primereact/button";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import InputField from "../../../../components/input-field/InputField";
import useWarehouses from "../../../../hooks/useWarehouses";
import { Warehouse } from "../../../../models/Warehouse";
import { debounce } from "../../../../utils";

// import './GroupsSidebar.scss';

interface ComponentProps {
  setRecordClicked: Dispatch<SetStateAction<number>>;
  recordClicked: number;
  setDialogMode: Dispatch<SetStateAction<string>>;
  deleteDialog: any;
  createEditDialog: any;
}

const GroupsSidebar = (props: ComponentProps): JSX.Element => {
  const {
    setRecordClicked,
    recordClicked,
    deleteDialog,
    createEditDialog,
    setDialogMode,
  } = props;
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const { warehouses, refetchWarehouses } = useWarehouses();

  const filteredRecords = useMemo(
    () =>
      warehouses.filter((obj) =>
        Object.values(obj)
          .join(" ")
          .toLowerCase()
          .includes(globalFilter.toLowerCase())
      ),
    [warehouses, globalFilter]
  );

  const handleInput = useCallback(
    debounce(
      (event: React.ChangeEvent<HTMLInputElement>) =>
        setGlobalFilter(event.target.value),
      500
    ),
    []
  );

  const sidebarBodyRow = ({ id, name }: Warehouse) => (
    <div
      role="button"
      tabIndex={0}
      className={`SidebarBodyRow ${recordClicked === id ? "active" : ""}`}
      key={id}
      onClick={() => setRecordClicked(id)}
    >
      <span className="title">{name}</span>
      <div className="buttons">
        <Button
          label="delete"
          className="p-button-danger"
          onClick={() => {
            deleteDialog.show();
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="Sidebar GroupsSidebar">
      <div className="SidebarHeader">
        <div>
          <Button
            label="Add Warehouse"
            onClick={() => {
              setDialogMode("create");
              createEditDialog.show();
            }}
          />
        </div>
        <span className="p-input-icon-left">
          <InputField
            wrapperOptions={{ marginBottom: 0 }}
            type="search"
            placeholder={`Search for warehouse`}
            onInput={handleInput}
          />
        </span>
      </div>
      <div className="SidebarBody">
        {filteredRecords.map((record) => sidebarBodyRow(record))}
      </div>
    </div>
  );
};

export default GroupsSidebar;
