import { Request, Response } from "express";
import knex from "../database/connection";

class UsersControllers {
    async create(request: Request, response: Response) {
            const {isTeacher, name} = request.body;
            await knex('users').insert({isTeacher, name});
            
            return response.json(request.body);
    }
}

export default UsersControllers

// gere uma documentação!
