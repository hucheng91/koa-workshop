/*
 * @Author: hucheng
 * @Date: 2020-07-08 06:05:07
 * @Description: here is des
 */ 
const Koa = require('koa')
const  Router = require('koa-router');
const fs = require('fs')
const app = new Koa()
const  router = new Router();

const {
    list,
    detail
} = require('./controller/user')


router.get('/user/list', list)
router.get('/user/detail/:id', detail)
module.exports = router