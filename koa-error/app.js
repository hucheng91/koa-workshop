/*
 * @Author: hucheng
 * @Date: 2020-06-22 06:41:21
 * @Description: here is des
 */ 
const Koa = require('koa')
const app = new Koa()
const router = require('./router')
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    if(ctx.status === 500) {
      ctx.body = '服务器异常，请联系管理员';
    }
    ctx.app.emit('error', err, ctx);
  }
});
app.use(async (ctx, next) => {
  ctx.msg = 'hello';
  return  next();
});

app.use(async (ctx, next) => {
  ctx.msg += ' ';
  await next();
});
app.use(async (ctx, next) => {
  throw Error('这里泡个错');
  ctx.msg += 'world';
  await next();
});
app.on('error', (err, ctx) => {
  console.log('error handle:', err)
 // 这里可以做个通知处理，比如发个邮件，钉钉消息啥的
});
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000, () => {
    console.log(' starting at port 3000')
})
