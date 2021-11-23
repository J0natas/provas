import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('grade', table => {
        table.increments('id').primary();
        table.integer('studentID').notNullable().references('id').inTable('students');
        table.integer('roomID').notNullable().references('id').inTable('rooms');
        table.integer('questionID').notNullable().references('id').inTable('questions');
        table.integer('answerID').notNullable().references('id').inTable('answers');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('grade');
}
