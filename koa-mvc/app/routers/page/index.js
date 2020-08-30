/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:22:14
 * @Description: here is des
 */ 
const Koa = require('koa')
const  Router = require('koa-router')
const  router = new Router();
router.get('/', async (ctx, next) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
});
router.get('/login', async (ctx, next) => {
    await ctx.render('login', {
        title: 'login',
    })
});
router.get('/index', async (ctx, next) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
});
router.get('/userList', async (ctx, next) => {
    let title = '用户增删改查'
    await ctx.render('userList', {
        title,
    })
});
router.get('/todo', async (ctx, next) => {
    ctx.body = await render('todo.html')
});
module.exports = router