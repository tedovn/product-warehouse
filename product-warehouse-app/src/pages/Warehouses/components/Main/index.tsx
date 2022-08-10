import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { DataTable, DataTableProps } from "primereact/datatable";
import { TabView, TabPanel, TabPanelProps } from "primereact/tabview";

import useWarehouse from "../../../../hooks/useWarehouse";
import { Column, ColumnProps } from "primereact/column";

interface ComponentProps {
  recordClicked: number;
  importDialog: any;
  exportDialog: any;
}

interface CustomTabPanelProps extends TabPanelProps {
  table: DataTableProps;
  columns: ColumnProps[];
}

const productsColumns: ColumnProps[] = [
  {
    field: "product_name",
    header: "Name",
  },
  {
    field: "sum",
    header: "Quantity",
  },
];

const historyColumns: ColumnProps[] = [
  {
    field: "product_name",
    header: "Name",
  },
  {
    field: "product_description",
    header: "Description",
  },
  {
    field: "product_quantity",
    header: "Quantity",
  },
  {
    field: "type",
    header: "Type",
  },
  {
    field: "created_at",
    header: "Created at",
  },
];

const Main = (props: ComponentProps): JSX.Element => {
  const { recordClicked, importDialog, exportDialog } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const { warehouse, warehouseHistory } = useWarehouse(recordClicked);
  const tabPanels: CustomTabPanelProps[] = [
    {
      header: "Warehouse Products",
      table: {
        value: warehouse.products,
        scrollable: true,
        paginator: true,
        rows: 6,
      },
      columns: [
        ...productsColumns,
        {
          field: "",
          header: "",
          body: (rowData) => (
            <Button
              className="p-button-danger"
              label="EXPORT"
              onClick={() => {
                console.info({ rowData });
                exportDialog.show();
              }}
            />
          ),
        },
      ],
    },
    {
      header: "History",
      table: {
        value: warehouseHistory.map((whistory: any) => ({
          ...whistory,
          created_at: new Date(Number(whistory.created_at)).toLocaleString(),
        })),
        scrollable: true,
        paginator: true,
        rows: 6,
      },
      columns: historyColumns,
    },
  ];

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
        <Button
          label="IMPORT"
          onClick={() => {
            console.info("IMPORT");
            // setSelectedProductId(rowData.id);
            importDialog.show();
          }}
        />
      </div>
      <div className="MainBody">
        <div className="MainBodyTable">
          <TabView
            activeIndex={activeIndex}
            onTabChange={(e: any) => setActiveIndex(e.index)}
          >
            {tabPanels.map((tab, index) => (
              <TabPanel key={index} header={tab.header}>
                <DataTable {...tab.table}>
                  {tab.columns.map((column) => (
                    <Column key={index} {...column} />
                  ))}
                </DataTable>
              </TabPanel>
            ))}
          </TabView>
        </div>
      </div>
    </div>
  );
};

export default Main;
