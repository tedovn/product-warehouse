export interface Product {
  id?: number;
  name: string;
  description?: string;
  type: Type;
  created_at?: string;
}

export interface Products {
  products: Product[];
}

export enum Type {
  Hazardous = "hazardous",
  Nonhazardous = "nonhazardous",
}
