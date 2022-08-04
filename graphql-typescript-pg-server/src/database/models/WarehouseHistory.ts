import { Model } from 'objection';

export enum WarehouseHistoryType {
  IMPORT = 'import',
  EXPORT = 'export'
}

class WarehouseHistory extends Model {
  static tableName = "customers";

  id!: number;
  warehouse_id!: number;
  product_id!: number;
  product_name!: string;
  product_description!: string;
  product_quantity!: number;
  customer_id!: number;
  type!: WarehouseHistoryType;
  created_at?: string;
  updated_at?: string;

  static jsonSchema = {
    type: 'object',
    required: ['warehouse_id', 'product_id', 'product_name', 'product_description', 'product_quantity', 'customer_id', 'type'],

    properties: {
      id: { type: 'integer' },
      warehouse_id: { type: 'integer' },
      product_id: { type: 'integer' },
      product_name: { type: 'string', min: 1, max: 255 },
      product_description: { type: 'string', min: 1, max: 255 },
      product_quantity: { type: 'integer' },
      customer_id: { type: 'integer' },
      type: { type: 'string' },
      created_at: { type: 'string', min: 1, max: 255 },
      updated_at: { type: 'string', min: 1, max: 255 }
    }
  }
}



export default WarehouseHistory;