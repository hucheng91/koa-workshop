/*
 * @Author: hucheng
 * @Date: 2020-07-08 06:05:07
 * @Description: here is des
 */ 
const Koa = require('koa')
const app = new Koa()
const router = require('./router')
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000, () => {
    console.log(' starting at port 3000')
})
