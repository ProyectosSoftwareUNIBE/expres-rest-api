import {Request, Response} from "express";
import {User} from "../entity/user";
import swaggerJSDoc from "swagger-jsdoc";
const swaggerJsDoc = require('swagger-jsdoc');
import {getRepository} from "typeorm";
import {UserDto} from "../dto/user.dto";


/**
 * @swagger
 * /user:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 *
 */
export const getUser = async (req : Request, res : Response) : Promise < Response > => {

    const users = await getRepository(User).find({relations: ["photos"]});
    let usersDto: UserDto[] = [];
    users.forEach(user => {
        let userDto: UserDto = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            isActive: user.isActive,
            photos: user.photos
        }
        usersDto.push(userDto)
    });
    return res.json(usersDto)
}


export const createUser = async (req : Request, res : Response) : Promise < Response > => {

    const newUser = await getRepository(User).create(req.body);
    const results = await getRepository(User).save(newUser);
    return res.json(results);
};
