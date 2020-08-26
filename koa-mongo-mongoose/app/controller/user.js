// @ts-nocheck
/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:21:50
 * @Description: here is des
 */ 
const User = require('../models/user')
async function list(ctx) {
    
    const data = await User.find({})
    console.log(data)
    ctx.body = {
        data: data.map(ele => ({...ele._doc, id: ele._id})),
        success: true
    }
}
async function detail(ctx) {
    const id = ctx.params.id
    const data = await User.findById(id)
    ctx.body = {
        data: data,
        success: true
    }
}
async function add(ctx) {
    const { path } =  ctx.request.files.file 
    const { name, email } = ctx.request.body // 获取 request body 字段
    const imgUrl = path.split("/static")[1]
    const user = new User({ name, email, imgUrl })
    const data = await user.save()
    ctx.body = {
        data: data,
        success: true,
    }
}
module.exports = {
    detail,
    list,
    add
}