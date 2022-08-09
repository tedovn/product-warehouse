import { ApolloError } from "apollo-server-express";
import { Product, Warehouse, WarehouseHistory } from "../../database/models";
import { Resolvers, WarehouseHistoryType } from "../../__generated__/generated-types";

const resolvers: Resolvers = {
  Query: {
    warehouseHistory: async (parent, { id }, ctx) => {
      return await WarehouseHistory.query().where('warehouse_id', id);
    }
  },
  Mutation: {
    import: async (parent, { warehouseHistory }, ctx) => {
      const { warehouse_id, product_id, customer_id, quantity } = warehouseHistory;

      // get product data
      const product: Product = await Product.query().findById(product_id);
      // get warehouse data
      const warehouse: Warehouse = await Warehouse.query().findById(warehouse_id);

      if (product.type !== warehouse.type) throw new ApolloError('Types of product and warehouse don`t match', 'BAD_USER_INPUT', {});

      // create import in warehouse
      const record = await WarehouseHistory.query().insert({
        warehouse_id,
        customer_id,
        product_id: product.id,
        product_description: product.description,
        product_name: product.name,
        product_quantity: quantity,
        type: WarehouseHistoryType.Import
      });

      return record.id;
    },
    export: async (parent, { id, quantity }, ctx) => {
      const history = await WarehouseHistory.query().findById(id);
      const { warehouse_id, product_id, product_name, product_description, customer_id } = history

      // create export in warehouse
      const record = await WarehouseHistory.query().insert({
        warehouse_id,
        product_id,
        product_name,
        product_quantity: quantity,
        product_description,
        customer_id,
        type: WarehouseHistoryType.Export
      });

      return record.id;
    },
  }
};

export default resolvers;
