import express, { Application } from "express";
import { ApolloServer, Config } from "apollo-server-express";
import schema from "./schema";
import Knex from "knex";
import { Model } from "objection";
import dbconfig from "./database/config";
const db = Knex(dbconfig["development"]);
import { CalculationAPI } from "./schema/dataSources";
import { errorHandler } from "./utils/errorHandler";

Model.knex(db);

const app: Application = express();

const config: Config = {
  schema: schema,
  introspection: true, // these lines are required to use the gui
  playground: true, // of playground
  tracing: true,
  dataSources: () => ({
    calculationAPI: new CalculationAPI()
  }),
  formatError: (error) => errorHandler(error)
};

const server: ApolloServer = new ApolloServer(config);

server.applyMiddleware({
  app,
  path: "/graphql",
});

app.listen(3000, () => {
  console.log("We are running on http://localhost:3000/graphql");
});