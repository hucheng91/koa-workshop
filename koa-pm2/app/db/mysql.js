const { mySql } = require("../config");
const { Sequelize } = require("sequelize");
const { logger } = require("../log4j/logger");
const { port, host, pass, userName, database, dialect = "mysql" } = mySql;
let connection;

async function initDB() {
    try {
        const sequelize = new Sequelize(database, userName, pass, {
            host: host,
            port: port,
            dialect: dialect,
        });
        connection = sequelize;
        await sequelize.authenticate();
    } catch (error) {
        logger.error(error);
    }
}
function getConnection() {
    return connection;
}
initDB();
module.exports = {
    getConnection,
};
