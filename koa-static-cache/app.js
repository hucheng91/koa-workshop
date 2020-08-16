/*
 * @Author: hucheng
 * @Date: 2020-06-22 06:41:21
 * @Description: here is des
 */ 
const Koa = require('koa')
const views = require('koa-views')
const static = require('koa-static')
const koaBody = require('koa-body');
const path = require('path')
const app = new Koa()
const router = require('./router')
const compress = require('koa-compress')
const staticCache = require('koa-static-cache');
app.use(compress({
  filter (content_type) {
    return /text/i.test(content_type)
  },
  threshold: 2048,
  gzip: {
    flush: require('zlib').constants.Z_SYNC_FLUSH
  },
  deflate: {
    flush: require('zlib').constants.Z_SYNC_FLUSH,
  },
  br: false 
}))
app.use(staticCache(path.join(__dirname, 'static'), {
  maxAge: 365 * 24 * 60 * 60  // 最大缓存时间
}))
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
app.use(static(
  path.join( __dirname,  './static')
))

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000, () => {
    console.log(' starting at port 3000')
})
