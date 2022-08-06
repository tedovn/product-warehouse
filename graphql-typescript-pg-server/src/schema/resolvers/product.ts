import { Product } from "../../database/models";
import { Resolvers } from "../../__generated__/generated-types";

const resolvers: Resolvers = {
  Query: {
    products: async (parent, args, ctx) => {
      return await Product.query();
    },
    product: async (parent, args, ctx) => {
      return await Product.query().findById(args.id);
    },
  },
  Mutation: {
    createProduct: async (parent, args, ctx) => {
      // @ts-ignore
      return await Product.query().insert({ ...args.product });
    },
    deleteProduct: async (parent, args, ctx) => {
      await Product.query().deleteById(args.id);
      return "Successfully deleted";
    }
  }
};

export default resolvers;
