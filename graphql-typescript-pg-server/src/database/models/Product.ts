import { Model } from 'objection';
import { ProductType } from '../../__generated__/generated-types';

class Product extends Model {
  static tableName = "products";

  id!: number;
  name!: string;
  description?: string;
  type!: ProductType;
  created_at?: string;
  updated_at?: string;

  static jsonSchema = {
    type: 'object',
    required: ['name', 'type'],

    properties: {
      id: { type: 'integer' },
      description: { type: 'string', min: 1, max: 255 },
      name: { type: 'string', min: 1, max: 255 },
      type: { type: 'string' },
      created_at: { type: 'string', min: 1, max: 255 },
      updated_at: { type: 'string', min: 1, max: 255 }
    }
  }
}

export default Product;