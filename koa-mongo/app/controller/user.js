// @ts-nocheck
/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:21:50
 * @Description: here is des
 */ 
async function list(ctx) {
    
    const data = await ctx.mongo.collection('user').find({}).toArray()
    ctx.body = {
        data: data.map(ele => ({...ele, id: ele._id})),
        success: true
    }
}
async function detail(ctx) {
    const id = ctx.params.id
    const data = await ctx.mongo.collection('user').findOne({id}).toArray()
    ctx.body = {
        data: data[0],
        success: true
    }
}
async function add(ctx) {
    const { path } =  ctx.request.files.file 
    const { name, email } = ctx.request.body // 获取 request body 字段
    const imgUrl = path.split("/static")[1]
    const data = await ctx.mongo.collection('user').insertOne({ name, email, img_url: imgUrl })
    ctx.body = {
        data: data.ops[0],
        success: true,
    }
}
module.exports = {
    detail,
    list,
    add
}