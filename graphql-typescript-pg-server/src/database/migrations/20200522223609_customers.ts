import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return await knex.schema
    .createTable("customers", (table: Knex.CreateTableBuilder) => {
      table.increments().primary();
      table.string("customer_number").notNullable().unique();
      table.string("name").notNullable().unique();
      table.string("city").notNullable();
      table.string("state").notNullable();
      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<any> {
  return await knex.schema.dropTable('customers');
}
