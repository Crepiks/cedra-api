import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("genders", (table) => {
    table.increments("id");
    table.string("single", 255).notNullable();
    table.string("plural", 255).notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("genders");
}
