// Import de pacotes
import express from 'express';
import knex from './database/connection';

// Import de arquivos
import UsersControllers from './controllers/UsersControllers';

// Variáveis
const routes = express.Router();
const usersControllers = new UsersControllers();

// Adicionar Usuário
routes.post('/users', usersControllers.create);

// Listar Usuários
routes.get('/users', async (request, response) => {
    const listUsers = await knex('users').select('*');

    return response.json(listUsers);
});

export default routes;