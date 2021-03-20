import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("phoneNumber", 255).notNullable();
    table.string("firstName", 255).notNullable();
    table.string("lastName", 255).nullable();
    table.date("birthday").notNullable();
    table.integer("genderId").unsigned().notNullable();
    table.foreign("genderId").references("genders.id").onDelete("CASCADE");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
