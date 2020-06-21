/*
 * @Author: hucheng
 * @Date: 2020-06-22 06:41:21
 * @Description: here is des
 */ 
const Koa = require('koa')
const  Router = require('koa-router');
const fs = require('fs')
const app = new Koa()
const  router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = await render('index.html')
});
router.get('/index', async (ctx, next) => {
    ctx.body = await render('index.html')
});
router.get('/todo', async (ctx, next) => {
    ctx.body = await render('todo.html')
});
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000, () => {
    console.log(' starting at port 3000')
})
function render( page ) {
    return new Promise(( resolve, reject ) => {
        let viewUrl = `./view/${page}`
        fs.readFile(viewUrl, "binary", ( err, data ) => {
        if ( err ) {
            reject( err )
        } else {
            resolve( data )
        }
        })
    })
}