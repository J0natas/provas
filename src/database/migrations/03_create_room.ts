import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('rooms', (table) => {
        table.increments('id').primary();
        table.integer('teacherID').notNullable().references('id').inTable('users');
        table.integer('questionID').notNullable().references('id').inTable('questions');
        table.integer('answerID').notNullable().references('id').inTable('answers');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('rooms');
}
