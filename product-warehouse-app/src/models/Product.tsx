export interface Product {
  id?: number;
  name: string;
  description?: string;
  type: ProductType;
  created_at?: string;
}

export interface Products {
  products: Product[];
}

export enum ProductType {
  Hazardous = "hazardous",
  Nonhazardous = "nonhazardous",
}
