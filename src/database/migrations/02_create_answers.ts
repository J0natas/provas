import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('answers', table => {
        table.increments('id').primary();
        table.integer('questionID').notNullable().references('id').inTable('questions');
        table.string('answer').notNullable();
        table.boolean('isCorrect').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('answers');
}
