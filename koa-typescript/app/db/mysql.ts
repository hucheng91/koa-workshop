import config from "../config";
import { Sequelize } from "sequelize";
import { logger } from "../log4j/logger";
const { mySql } = config;
const { port, host, pass, userName, database, dialect = "mysql" } = mySql;
let connection;
export async function initDB() {
    try {
        const sequelize = new Sequelize(database, userName, pass, {
            host: host,
            port: port,
            //@ts-ignore
            dialect: dialect,
        });
        connection = sequelize;
        await sequelize.authenticate();
    } catch (error) {
        logger.error(error);
    }
}
export function getConnection() {
    return connection;
}
initDB();
