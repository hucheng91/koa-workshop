/*
 * @Author: hucheng
 * @Date: 2020-07-05 18:45:19
 * @Description: here is des
 */ 

async function auth(ctx, next) {
    const whiteList = ['/', '/index', '/login'] // 这里我们标记白名单，不走认证的

    if(!whiteList.includes(ctx.request.path) && !ctx.request.headers['token']) {
        ctx.throw(401, '没有token，请登录')
    }
    await next()
    
}


module.exports = auth