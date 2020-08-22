const {mySql } = require('../config')
const mysql      = require('mysql')
const { logger } = require('../log4j/logger')
const { port, host, pass, userName, database } = mySql
let connection
function  wrapQueryMethodPromise(fn, ctx) {
    return function(...args) {
        return new Promise( (resolve, reject) => {
            const  callback = (err, data) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            }
            fn.apply(ctx, [...args, callback]);
        })
    };
}
async function  initDB() {
    try {
        const connectionMysql = await mysql.createPool({
            connectionLimit : 10,
            host,
            user: userName,
            password: pass,
            port,
            database
        }) 
        connection = connectionMysql
        return Promise.resolve(connectionMysql)
    } catch (error) {
        logger.error(error)
    }
}
async function getConnection() {
    const queryMethods = ['query']
    queryMethods.forEach(function(name) {
        connection[name+'Promise'] = wrapQueryMethodPromise(connection[name], connection);
    });
    return connection
}

module.exports = {
    initDB,
    getConnection
}