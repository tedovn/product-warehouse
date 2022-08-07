import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import { Column } from "primereact/column";

import useDialog from "../../hooks/useDialog";
import useToast from "../../hooks/useToast";
import useProducts from "../../hooks/useProducts";

import DeleteDialog from "./components/DeleteDialog";
import CreateDialog from "./components/CreateDialog";

import "./style.scss";

const Home = () => {
  const [selectedProductId, setSelectedProductId] = useState(0);
  const { products, refetchProducts, deleteProduct } = useProducts();

  const { showToast } = useToast();
  const createProductDialog = useDialog({ defaultState: false });
  const deleteDialog = useDialog({ defaultState: false });

  useEffect(() => {
    if (products.length == 0) {
      refetchProducts();
    }
  }, []);

  const removeProduct = () => {
    deleteProduct({
      variables: { id: selectedProductId },
      onCompleted: () => {
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
  };

  return (
    <div className="home">
      <div className="headline">
        <h2>Products List</h2>
        <Button label="Add Product" onClick={createProductDialog.show} />
      </div>
      <DataTable value={products} paginator rows={10}>
        <Column field="id" header="ID" />
        <Column field="name" header="Name" />
        <Column field="description" header="Description" />
        <Column field="type" header="Type" />
        <Column
          field=""
          header=""
          body={(rowData) => (
            <Button
              className="p-button-danger"
              label="Delete"
              onClick={() => {
                setSelectedProductId(rowData.id);
                deleteDialog.show();
              }}
            />
          )}
        />
      </DataTable>
      <CreateDialog
        {...{
          isVisible: createProductDialog.isVisible,
          hide: createProductDialog.hide,
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

export default Home;
