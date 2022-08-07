import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { TabView, TabPanel } from "primereact/tabview";

import useWarehouse from "../../../../hooks/useWarehouse";
import { Column } from "primereact/column";
import { SumProductWarehouseHistory } from "../../../../models/Warehouse";

interface ComponentProps {
  recordClicked: number;
}

const Main = (props: ComponentProps): JSX.Element => {
  const { recordClicked } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const { warehouse, warehouseHistory } = useWarehouse(recordClicked);

  return (
    <div className="Main">
      <div className="MainHeader">
        <h3>{warehouse.name}</h3>
        <span>
          Capacity: {warehouse.capacity - warehouse.availableCapacity} /{" "}
          {warehouse.capacity}
        </span>
        <br />
        <span>Type: {warehouse.type}</span>
      </div>
      <div className="MainBody">
        <div className="MainBodyTable">
          <TabView
            activeIndex={activeIndex}
            onTabChange={(e: any) => setActiveIndex(e.index)}
          >
            <TabPanel header="Warehouse Products">
              <DataTable
                value={warehouse.products}
                scrollable
                paginator
                rows={10}
              >
                <Column field="product_name" header="Name" />
                <Column field="sum" header="Quantity" />
              </DataTable>
            </TabPanel>
            <TabPanel header="History">
              <DataTable
                value={warehouseHistory}
                scrollable
                paginator
                rows={10}
              >
                <Column field="product_name" header="Name" />
                <Column field="product_description" header="Description" />
                <Column field="product_quantity" header="Quantity" />
                <Column field="type" header="Type" />
              </DataTable>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
};

export default Main;
