// @ts-nocheck
/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:21:50
 * @Description: here is des
 */ 
const User = require('../models/user')
async function list(ctx) {
    const data = await User.findAll()
    console.log('查询到：', data)
    ctx.body = {
        data: data,
        success: true
    }
}
async function detail(ctx) {
    const id = ctx.params.id
    const data = await ctx.model.User.findByPk(id)
    ctx.body = {
        data: data[0],
        success: true
    }
}
async function add(ctx) {
    const { path } =  ctx.request.files.file 
    const { name, email } = ctx.request.body // 获取 request body 字段
    const imgUrl = path.split("/static")[1]
    const data = await User.create({ name, email, imgUrl })
    ctx.body = {
        success: true,
    }
}
async function  remove(params) {
    const id = ctx.params.id
    const data = await User.destroy(id)
    ctx.body = {
        data: data[0],
        success: true
    }
}
module.exports = {
    detail,
    list,
    add,
    remove
}