import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("tags", (table) => {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("tags");
}
