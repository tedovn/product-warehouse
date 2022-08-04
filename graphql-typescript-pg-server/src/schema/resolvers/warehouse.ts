import { Warehouse } from "../../database/models";
import { Resolvers } from "../../__generated__/generated-types";

const resolvers: Resolvers = {
  Query: {
    warehouses: async (parent, args, ctx) => {
      return await Warehouse.query();
    },
    warehouse: async (parent, args, ctx) => {
      return await Warehouse.query().findById(args.id);
    },
  },
  Mutation: {
    createWarehouse: async (parent, args, ctx) => {
      // @ts-ignore
      return await Warehouse.query().insert({ ...args.warehouse });
    },
  }
};

export default resolvers;
