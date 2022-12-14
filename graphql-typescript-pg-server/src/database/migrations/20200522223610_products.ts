import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return await knex.schema
    .createTable("products", (table: Knex.CreateTableBuilder) => {
      table.increments().primary();
      table.string("name").notNullable().unique();
      table.string("description").nullable();
      table.enum("type", ['hazardous', 'nonhazardous']).notNullable();
      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<any> {
  return await knex.schema.dropTable('products');
}
