/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:22:14
 * @Description: here is des
 */ 
const Koa = require('koa')
const  Router = require('koa-router')
const fs = require('fs')
const path = require('path')
const app = new Koa()
const  router = new Router();
const { login } = require('./controller/login')
const {
    list,
    detail,
    add
} = require('./controller/user')
router.get('/', async (ctx, next) => {
    if(!ctx.app.userInfo){
        ctx.redirect('/login')
        return
    }
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
});
router.post('/login', login);
router.get('/login', async (ctx, next) => {
    if(ctx.app.userInfo){
        ctx.redirect('/')
    }
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

router.get('/user/list', list)
router.get('/user/detail/:id', detail)
router.post('/user/add', add)

module.exports = router