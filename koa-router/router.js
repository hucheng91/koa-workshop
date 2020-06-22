/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:22:14
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
router.get('/', async (ctx, next) => {
    ctx.body = await render('index.html')
});
router.get('/index', async (ctx, next) => {
    ctx.body = await render('index.html')
});
router.get('/todo', async (ctx, next) => {
    ctx.body = await render('todo.html')
});
router.get('/user/list', list)
router.get('/user/detail/:id', detail)

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
module.exports = router