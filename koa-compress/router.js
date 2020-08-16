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

router.get('/', async (ctx, next) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
});
module.exports = router