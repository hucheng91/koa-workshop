/*
 * @Author: hucheng
 * @Date: 2020-06-22 06:41:21
 * @Description: here is des
 */ 
const Koa = require('koa')
const  Router = require('koa-router')
const views = require('koa-views')
const static = require('koa-static')

const path = require('path')
const app = new Koa()
const  router = new Router();
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
app.use(static(
  path.join( __dirname,  './static')
))
router.get('/', async (ctx, next) => {
  let title = 'hello koa2'
  await ctx.render('fe', {
      title,
  })
});
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3001, () => {
    console.log(' starting at port 3001')
})
