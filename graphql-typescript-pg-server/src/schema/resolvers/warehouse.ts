import { Product, Warehouse, WarehouseHistory } from "../../database/models";
import { Resolvers, SumProductWarehouseHistory } from "../../__generated__/generated-types";

const resolvers: Resolvers = {
  Query: {
    warehouses: async (parent, args, ctx) => {
      return await Warehouse.query();
    },
    warehouse: async (parent, args, ctx) => {
      const warehouse = await Warehouse.query().findById(args.id);

      const products: SumProductWarehouseHistory[] = await WarehouseHistory.query()
        .select('product_name')
        .sum('product_quantity')
        .where('warehouse_id', warehouse.id)
        .groupBy('product_name')
        .havingRaw('SUM(product_quantity) > ?', [0])

      return {
        ...warehouse,
        products
      }
    },
  },
  Mutation: {
    createWarehouse: async (parent, args, ctx) => {
      // @ts-ignore
      return await Warehouse.query().insert({ ...args.warehouse });
    },
    deleteWarehouse: async (parent, args, ctx) => {
      await Warehouse.query().deleteById(args.id);
      return "Successfully deleted";
    }
  }
};

export default resolvers;
