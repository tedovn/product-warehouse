module.exports = {
  apps: [
    {
      name: "calculation-rest-api",
      cwd: "./calculation-rest-api",
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: "dev"
      },
    },
    {
      name: "graphql-typescript-pg-server",
      cwd: "./graphql-typescript-pg-server",
      script: 'yarn',
      args: 'dev',
      env: {
        NODE_ENV: "dev"
      },
    },
    {
      name: "product-warehouse-app",
      cwd: "./product-warehouse-app",
      script: 'yarn',
      args: 'dev',
      env: {
        NODE_ENV: "dev"
      },
    }
  ]
};