const {mySql } = require('../config')
const mysql      = require('mysql')
const { logger } = require('../log4j/logger')
const { port, host, pass, userName, database } = mySql
console.log(mySql)
async function initDB() {
    // 创建连接
    // const connection = mysql.createConnection({
    //     host,
    //     user: userName,
    //     password: pass,
    //     port,
    //     database
    // });
    // return new Promise((resolve, reject) => {
    //     connection.connect(function(err) {
    //         if (err) {
    //             logger.error('error connecting: ' + err.stack)
    //             reject(err)
    //             return;
    //         }
    //         logger.info(`mysql connect success`)
    //         resolve(connection)
    //     });
    // })
    const connection = mysql.createPool({
        connectionLimit : 10,
        host,
        user: userName,
        password: pass,
        port,
        database
    });
    return Promise.resolve(connection)
}
async function connectDB() {
    const connection =  await initDB()
    connection.query('insert into  user set ?', { name: "sdfas" }, function(err, data) {
        if(err) {
            logger.error(err)
        } else {
            connection.query('SELECT * from user', function(err, data) {
                if(err) {
                    logger.error(err)
                } else {
                    console.log("DB 获取到数据:", data)
                    connection.end() // 释放连接
                }
            });
        }
    });
}

connectDB()