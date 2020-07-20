/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:22:14
 * @Description: here is des
 */ 
const Koa = require('koa')
const  Router = require('koa-router');
const fs = require('fs')
const path = require('path')
const app = new Koa()
const  router = new Router();
const { login } = require('./controller/login')
const auth = require('./midware/auth')
const {
    list,
    detail
} = require('./controller/user')

router.get('/', async (ctx, next) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
});
// router.get('/index.css', async (ctx, next) => {
//     ctx.response.type = 'css';
//     ctx.response.body = fs.createReadStream('static/index.css');
// });
// router.get('/koa.jpg', async (ctx, next) => {
//     ctx.response.type = 'image/jpg';
//     ctx.response.body = fs.createReadStream('static/koa.jpg');
// });
router.post('/login', login);
router.get('/index', async (ctx, next) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })

});
router.get('/todo', async (ctx, next) => {
    ctx.body = await render('todo.html')
});
router.get('/', async (ctx, next) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
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