import { Customer } from "../../database/models";
import { Resolvers } from "../../__generated__/generated-types";

const resolvers: Resolvers = {
  Query: {
    customers: async (parent, args, ctx) => {
      return await Customer.query();
    },
    customer: async (parent, args, ctx) => {
      return await Customer.query().findById(args.id);
    },
  }
};

export default resolvers;
