const mongoose = require('mongoose')
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
    const mongooseDB =  await mongoose.connect(mongoUrl, {poolSize: poolSize,dbName: database})
    connection = mongooseDB.connection
}
initDB()
function getConnection() {
    return connection
}

module.exports = {
    initDB,
    getConnection,
}