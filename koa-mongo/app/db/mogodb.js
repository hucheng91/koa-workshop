const  MongoClient = require('mongodb').MongoClient
const { mongodb } = require('../config')
const { logger } = require('../log4j/logger')
const { port, host, pass, userName, database, authSource = 'admin', poolSize = 40 } = mongodb
let connection
/**
 * 这里我们初始化数据库连接
 */
async function  initDB() {
    let mongoUrl
    if (userName && pass) {
        mongoUrl = `mongodb://${userName}:${pass}@${host}:${port}?authSource=${authSource}`
    } else {
        mongoUrl = `mongodb://${host}:${port}`
    }
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoUrl, {poolSize: poolSize} ,function(err, client) {          
            if(err) {
                logger.error(err)
                reject(err)
            } else {
                logger.info("Connected successfully to mongo")
                connection = client.db(database)
                resolve(connection)
            }
            
        })
    })
}
async function getConnection() {
    return connection
}
module.exports = {
    initDB,
    getConnection
}