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
const { login } = require('./app/controller/login')
const {list, detail, add } = require('./app/controller/user')
const { download, downloadAll } = require('./app/controller/downloadFile')
router.get('/', async (ctx, next) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
});
router.post('/login', login);
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
router.get('/download/:name', download)
router.get('/', async (ctx) => {
    ctx.body = 'ok'
})
router.get('/user/detail/:id', detail)
router.post('/user/add', add)
router.get('/downloadAll', downloadAll)
router.get('/user/list', list)
module.exports = router