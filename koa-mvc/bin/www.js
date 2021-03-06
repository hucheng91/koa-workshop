#!/usr/bin/env node

/**
 * Module dependencies.
 */
const  http = require('http')
const validator = require('validator')
const app  = require('../app')
const { logger } = require('../app/log4j/logger')
const { initDB } = require('../app/db/mysql')
/**
 *  获取端口
 */
const  port = normalizePort(process.env.PORT || '3000')

let host = null
if (process.env.HOST) {
    logger.debug('process.env.HOST '+ process.env.HOST)
  // @ts-ignore
    if (validator.isIP(process.env.HOST)) {
            logger.trace(process.env.HOST + ' valid')
            host = process.env.HOST
    } else {
        logger.warn('process.env.HOST '+ process.env.HOST + ' invalid, use 0.0.0.0 instead')
    }
}

/**
 * 创建 Http Server
 */
const server = http.createServer(app.callback())
server.listen(port, host)
server.on('error', onError)
server.on('listening', onListening(server))

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10)
    if (isNaN(port)) {
        // named pipe
        return val
    }
    if (port >= 0) {
        // port number
        return port
    }
    return false
}


function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port

    switch (error.code) {
        case 'EACCES':
        logger.error(bind + ' requires elevated privileges')
        process.exit(1)
        break
        case 'EADDRINUSE':
        logger.error(bind + ' is already in use')
        process.exit(1)
        break
        default:
        throw error
    }
}
/**
 * 监听server 事件
 */
function onListening(server) {
    return () => {
        const addr = server.address()
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port
        logger.info('Listening on ' + bind)
    }
}
