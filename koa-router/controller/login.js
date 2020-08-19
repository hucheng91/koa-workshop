/*
 * @Author: hucheng
 * @Date: 2020-07-05 18:39:54
 * @Description: here is des
 */ 
const { logger } = require('../logger'); 
function login(ctx) {
    logger.info("come in loing")
    try {
        const token = '121212-45dfgffgfg'
        ctx.res.header.token =  token
        ctx.body = {
            token:  token
        }
    } catch (error) {
        logger.error(error)
    }
}


module.exports = {
    login
}