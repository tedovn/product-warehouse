import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable("warehouses_history", (table: Knex.CreateTableBuilder) => {
      table.increments().primary();
      table.integer("warehouse_id").notNullable();
      table.integer("product_id").notNullable();
      table.integer("product_name").notNullable();
      table.integer("product_description").notNullable();
      table.integer("product_quantity").notNullable();
      table.integer("customer_id").notNullable();
      table.enum("type", ['import', 'export']).notNullable();
      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<any> {
  return await knex.schema.dropTable('warehouses_history');
}
