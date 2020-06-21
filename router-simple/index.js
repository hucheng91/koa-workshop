/*
 * @Author: hucheng
 * @Date: 2020-06-22 06:41:21
 * @Description: here is des
 */ 
const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
const storeArray = []
app.use( async ( ctx ) => {
    let url = ctx.request.url
    let html = await route( url )
    ctx.body = html
})
async function route( url ) {
    let view = 'index.html'
    switch ( url ) {
        case '/':
            view = 'index.html'
            break
        case '/index':
            view = 'index.html'
            break
        case '/todo':
            view = 'todo.html'
            break
        default:
            break
    }
    let html = await render( view )
    return html
}
app.use( async ( ctx ) => {
    let url = ctx.request.url
    let data = await route( url )
    ctx.body = data
})
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