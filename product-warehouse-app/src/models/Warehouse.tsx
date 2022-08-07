export interface SumProductWarehouseHistory {
  product_name: string;
  sum: number;
}

export interface Warehouse {
  id: number;
  name: string;
  capacity: number;
  availableCapacity: number;
  type: WarehouseType;
  products: [SumProductWarehouseHistory];
  created_at: string;
}

export interface Warehouses {
  warehouses: Warehouse[];
}

export enum WarehouseType {
  Hazardous = "hazardous",
  Nonhazardous = "nonhazardous",
}
