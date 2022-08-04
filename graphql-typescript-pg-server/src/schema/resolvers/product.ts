import { Product } from "../../database/models";
import { ProductType } from "../../database/models/Product";
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
      return await Product.query().insert({ ...args.product, type: ProductType[args.product.type] });
    },
  }
};

export default resolvers;
