export interface SumProductWarehouseHistory {
  product_name: string;
  sum: number;
}

export interface Warehouse {
  id: number;
  name: string;
  capacity: number;
  availableCapacity: number;
  type: Type;
  products: [SumProductWarehouseHistory];
  created_at: string;
}

export interface Warehouses {
  warehouses: Warehouse[];
}

export enum Type {
  Hazardous = "hazardous",
  Nonhazardous = "nonhazardous",
}
