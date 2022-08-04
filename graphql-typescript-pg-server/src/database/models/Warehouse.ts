import { Model } from 'objection';

class Warehouse extends Model {
  static tableName = "warehouses";

  id!: number;
  name!: string;
  capacity!: number;
  created_at?: string;
  updated_at?: string;

  static jsonSchema = {
    type: 'object',
    required: ['name', 'capacity'],

    properties: {
      id: { type: 'integer' },
      name: { type: 'string', min: 1, max: 255 },
      capacity: { type: 'integer' },
      created_at: { type: 'string', min: 1, max: 255 },
      updated_at: { type: 'string', min: 1, max: 255 }
    }
  }
}

export default Warehouse;