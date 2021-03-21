import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("reactions", (table) => {
    table.increments("id");
    table.integer("initiatorId").unsigned().notNullable();
    table.foreign("initiatorId").references("users.id").onDelete("CASCADE");
    table.integer("recipientId").unsigned().notNullable();
    table.foreign("recipientId").references("users.id").onDelete("CASCADE");
    table.unique(["initiatorId", "recipientId"]);
    table.boolean("like").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("reactions");
}
