import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("user_tags", (table) => {
    table.increments("id");
    table.integer("userId").unsigned().notNullable();
    table.foreign("userId").references("users.id").onDelete("CASCADE");
    table.integer("tagId").unsigned().notNullable();
    table.foreign("tagId").references("tags.id").onDelete("CASCADE");
    table.unique(["userId", "tagId"]);
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user_tags");
}
