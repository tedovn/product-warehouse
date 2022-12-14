const default_config = {
  client: "pg",
  connection: {
    database: "product-warehouse",
    user: "postgres",
    password: "postgres",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "migrations",
  },
  seeds: {
    tableName: "knex_seeds",
    directory: "seeds",
  },
  timezone: "UTC",
};

interface KnexConfig {
  [key: string]: object;
}

const config: KnexConfig = {
  development: {
    ...default_config,
  },
  testing: {
    ...default_config,
    connection: {
      database: "product-warehouse-test",
      user: "postgres",
      password: "postgres",
    },
    pool: { min: 0, max: 10, idleTimeoutMillis: 500 },
  },
  production: {
    ...default_config,
  },
};

export default config;
