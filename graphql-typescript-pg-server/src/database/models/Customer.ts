import { Model } from 'objection';

class Customer extends Model {
  static tableName = "customers";

  id!: number;
  customer_number!: string;
  name!: string;
  city?: string;
  state?: string;
  created_at?: string;
  updated_at?: string;

  static jsonSchema = {
    type: 'object',
    required: ['customer_number', 'name', 'city', 'state'],

    properties: {
      id: { type: 'integer' },
      customer_number: { type: 'string', min: 1, max: 255 },
      name: { type: 'string', min: 1, max: 255 },
      city: { type: 'string', min: 1, max: 255 },
      state: { type: 'string', min: 1, max: 255 },
      created_at: { type: 'string', min: 1, max: 255 },
      updated_at: { type: 'string', min: 1, max: 255 }
    }
  }
}

export default Customer;