# GraphQL Typescript and PostgreSQL API

## Database

Create two databases on PostgreSQL called, `product-warehouse` and `product-warehouse-test`, and add your database credentials to the file `src/database/config.ts`
in case you might like name the databases with other name in that same file you can rename it

## Run Locally

Go to the project directory

```bash
  cd graphql-typescript-pg-server
```

Install dependencies

```bash
  yarn install
```

Migrate Database

```bash
   yarn migrate:up
```

Start the server

```bash
  yarn dev
```

## Running Tests

To run tests, run the following command

```bash
  yarn test:integration
```
