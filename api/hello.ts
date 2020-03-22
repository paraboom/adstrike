import "reflect-metadata";
import {NowRequest, NowResponse} from "@now/node"
import { Database } from "../src/database"
import {User} from "../src/entity/User"
import { Connection } from "typeorm";

export default async (request: NowRequest, response: NowResponse) => {
    const { id = 1 } = request.query
    const database = new Database()
    const connection: Connection = await database.getConnection()
    const userRepository = connection.getRepository(User)

    const user = await userRepository.findOne(id.toString())

    if (!user) {
        response.status(404).json({
            error: 'User not found'
        })
        return
    }

    response.status(200).json(user)
}