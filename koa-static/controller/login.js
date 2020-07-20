/*
 * @Author: hucheng
 * @Date: 2020-07-05 18:39:54
 * @Description: here is des
 */ 


function login(ctx) {
    const token = '121212-45dfgffgfg'
    ctx.res.header.token =  token
    ctx.body = {
        token:  token
    }
}


module.exports = {
    login
}