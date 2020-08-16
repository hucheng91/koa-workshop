/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:22:14
 * @Description: here is des
 */ 
const Koa = require('koa')
const  Router = require('koa-router')
const fs = require('fs')
const path = require('path')
const archiver = require('archiver')
const send = require('koa-send')
const app = new Koa()
const  router = new Router()
// router.get('/download/:name', async (ctx) => {
//     const name = ctx.params.name
//     const filePath = path.resolve(process.cwd(), `static/upload/${name}`) 
//     ctx.set('Content-disposition', 'attachment;filename='+name)
//     ctx.body = fs.createReadStream(filePath)
//     ctx.attachment(filePath)
// })
// router.get('/', async (ctx, next) => {
//     let title = 'hello koa2'
//     await ctx.render('index', {
//         title,
//     })
// })
router.get('/download/:name', async (ctx) => {
	const name = ctx.params.name
	const path = `static/upload/${name}`
	ctx.attachment(path)
await send(ctx, path)
})
router.get('/downloadAll', async (ctx) => {
    // 将要打包的文件列表
    const zipName = '1.zip'
    const zipStream = fs.createWriteStream('1.zip')
    const zip = archiver('zip')
    zip.pipe(zipStream)
    zip.directory('static/upload/', false) // 添加整个文件夹到压缩包
	await zip.finalize()
	ctx.attachment(zipName)
	await send(ctx, zipName)
})

module.exports = router