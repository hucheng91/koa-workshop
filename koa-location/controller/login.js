/*
 * @Author: hucheng
 * @Date: 2020-07-05 18:39:54
 * @Description: here is des
 */ 


function login(ctx) {
    const token = '121212-45dfgffgfg'
    console.log('ctx.res.header', ctx.response.header)
    ctx.response.header.token =  token
    ctx.app.userInfo = {
        name: '王二码字'
    }
    ctx.redirect('/')
}


module.exports = {
    login
}