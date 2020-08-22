// @ts-nocheck
/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:21:50
 * @Description: here is des
 */ 
async function list(ctx) {
    const data = await ctx.mysql.queryPromise('select * from user')
    ctx.body = {
        data: data,
        success: true
    }
}
async function detail(ctx) {
    const id = ctx.params.id
    const data = await ctx.mysql.queryPromise('select * from user where  id = ? ', [id])
    ctx.body = {
        data: data[0],
        success: true
    }
}
async function add(ctx) {
    const { path } =  ctx.request.files.file 
    const { name, email } = ctx.request.body // 获取 request body 字段
    const imgUrl = path.split("/static")[1]
    const data = await ctx.mysql.queryPromise(` insert into  user set ? `, { name, email, img_url: imgUrl })
    ctx.body = {
        success: true,
    }
}
module.exports = {
    detail,
    list,
    add
}