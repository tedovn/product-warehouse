# product-warehouse

## [Modules]

- calculation-rest-api
- graphql-typescript-pg-server
- product-warehouse-app

## [Startup]

- Install pm2 globally [LINK](https://pm2.keymetrics.io/)
- Install postgres or connect to existing one
- Create database in postgres
- Run yarn install for each project
- Run projects with pm2 or separately

## [PM2 Commands]

- pm2 start startup.config.js
- pm2 list
- pm2 log :id

## [TODO]

### Warehouses page

- Add / Edit form + validation for creating warehouse through the front-end application
- Add forms + validations for importing / exporting products from warehouse
- Add button for deleting warehouse

### Apollo GraphQL server

- Missing constrain in the warehouse_history table for deleting all records which are created for the deleted warehouse
