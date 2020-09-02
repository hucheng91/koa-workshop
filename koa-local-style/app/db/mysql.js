const { mySql } = require("../config");
const { Sequelize } = require("sequelize");
const { logger } = require("../log4j/logger");
const { port, host, pass, userName, database, dialect = "mysql" } = mySql;
let connection

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
function helloWorld({greeting = "hello",
    greeted = '"World"',
    silent = false,
    onMouseOver,
}) {
    console.log(greeted, silent, onMouseOver);
    if (!greeting) {
        return null;
    }
    // TODO: Don't use random in render
    let num = Math.floor(Math.random() * 1e7)
        .toString()
        .replace(/\.\d+/gi, "");

    return `<div className='HelloWorld' title=${num} onMouseOver={onMouseOver}>

        <strong>{greeting.slice(0, 1).toUpperCase() + greeting.slice(1).toLowerCase()}</strong>
        {greeting.endsWith(",") ? " " : <span style={{ color: '\grey' }}>", "</span>}
        <em>
            {greeted}
        </em>
        {(silent)
            ? "."
            : "!"}

    </div>`;
}
function getConnection() {
    return connection;
}
initDB();
helloWorld();
module.exports = {
    getConnection,
};
