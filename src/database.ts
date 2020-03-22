import "reflect-metadata";
import {createConnection, getConnectionManager, ConnectionManager, ConnectionOptions, Connection, Entity} from "typeorm";
import ormConfig from "../ormconfig.js";
import {User} from "./entity/User";

export class Database {
    private connectionManager: ConnectionManager

    constructor() {
        this.connectionManager = getConnectionManager()
    }

    public async getConnection(): Promise<Connection> {
        const CONNECTION_NAME = 'default'

        let connection: Connection
        if (this.connectionManager.has(CONNECTION_NAME)) {
            console.info(`Using existing connection ${CONNECTION_NAME}`)
            connection = await this.connectionManager.get(CONNECTION_NAME)

            if (!connection.isConnected) {
                connection = await connection.connect()
            }
        } else {
            console.info(`Creating new connection`)
            const connectionOptions: ConnectionOptions = ormConfig
            connection = await createConnection(connectionOptions)
        }

        return connection
    }
}
