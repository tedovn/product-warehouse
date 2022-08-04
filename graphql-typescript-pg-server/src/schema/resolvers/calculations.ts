import { Resolvers } from "../../__generated__/generated-types";

const resolvers: Resolvers = {
  Mutation: {
    sum: async (parent, args, { dataSources }) => {
      return await dataSources.calculationAPI.sum({ ...args });
    },
    subtract: async (parent, args, { dataSources }) => {
      return await dataSources.calculationAPI.subtract({ ...args })
    },
    multiply: async (parent, args, { dataSources }) => {
      return await dataSources.calculationAPI.multiply({ ...args })
    },
    divide: async (parent, args, { dataSources }) => {
      return await dataSources.calculationAPI.divide({ ...args })
    }
  },
};

export default resolvers;
