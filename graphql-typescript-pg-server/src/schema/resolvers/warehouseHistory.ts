import { ApolloError } from "apollo-server-express";
import { Product, Warehouse, WarehouseHistory } from "../../database/models";
import { Resolvers, SumProductWarehouseHistory, WarehouseHistoryType } from "../../__generated__/generated-types";

const resolvers: Resolvers = {
  Query: {
    warehouseHistory: async (parent, { id }, ctx) => {
      return await WarehouseHistory.query().where('warehouse_id', id);
    }
  },
  Mutation: {
    import: async (parent, { warehouse, product, quantity }, { dataSources }) => {
      if (quantity < 0) throw new ApolloError('Quantity need to be positive number', 'BAD_USER_INPUT');

      if (product.type !== warehouse.type) throw new ApolloError('Types of product and warehouse don`t match', 'BAD_USER_INPUT');

      const products: SumProductWarehouseHistory[] = await WarehouseHistory.query()
        .select('product_name')
        .sum('product_quantity')
        .where('warehouse_id', warehouse.id)
        .groupBy('product_name')
        .havingRaw('SUM(product_quantity) > ?', [0])

      const { result } = await dataSources.calculationAPI.sumArray({ digits: products.map(p => Number(p.sum)) })

      if (quantity > (warehouse.capacity - result)) throw new ApolloError('Not enough warehouse capacity', 'BAD_USER_INPUT');

      // create import in warehouse
      const record = await WarehouseHistory.query().insert({
        warehouse_id: warehouse.id,
        product_id: product.id,
        product_description: product.description,
        product_name: product.name,
        product_quantity: quantity,
        type: WarehouseHistoryType.Import
      });

      return record.id;
    },
    export: async (parent, { warehouse_id, product_name, quantity }, ctx) => {
      if (quantity < 0) throw new ApolloError('Quantity need to be positive number', 'BAD_USER_INPUT');

      const [{ product_id, product_description, sum }]: any = await WarehouseHistory.query()
        .select('product_id', 'product_description')
        .sum('product_quantity')
        .where('warehouse_id', warehouse_id)
        .andWhere('product_name', product_name)
        .groupBy('product_id', 'product_description');

      if (quantity > sum) throw new ApolloError('Not enough product quantity', 'BAD_USER_INPUT');

      // create export in warehouse
      const record = await WarehouseHistory.query().insert({
        warehouse_id,
        product_id,
        product_name,
        product_quantity: quantity *= -1,
        product_description,
        type: WarehouseHistoryType.Export
      });

      return record.id;
    },
  }
};

export default resolvers;
