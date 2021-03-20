import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("gender_preferences", (table) => {
    table.increments("id");
    table.integer("userId").unsigned().notNullable();
    table.foreign("userId").references("users.id").onDelete("CASCADE");
    table.integer("genderId").unsigned().notNullable();
    table.foreign("genderId").references("genders.id").onDelete("CASCADE");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("gender_preferences");
}
