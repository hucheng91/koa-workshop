// @ts-nocheck
/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:21:50
 * @Description: here is des
 */
const { findAll, findById, add, remove } = require("../services/user");

async function list(ctx) {
    const data = await findAll();
    ctx.body = {
        data: data,
        success: true,
    };
}
async function detail(ctx) {
    const id = ctx.params.id;
    if (id === null) {
        ctx.body = {
            messge: "参数ID不能为空",
            success: true,
        };
        return;
    }
    const data = await findById(id);
    ctx.body = {
        data: data[0],
        success: true,
    };
}
async function addUser(ctx) {
    const { path } = ctx.request.files.file;
    const { name, email } = ctx.request.body; // 获取 request body 字段
    const imgUrl = path.split("/static")[1];
    if (!name || !email || !imgUrl) {
        ctx.body = {
            messge: "参数错误",
            success: true,
        };
        return;
    }
    const data = await add({ name, email, imgUrl });
    ctx.body = {
        data: data,
        success: true,
    };
}
async function removeUser(ctx) {
    const id = ctx.params.id;
    const data = await remove(id);
    ctx.body = {
        data: data[0],
        success: true,
    };
}
async function update() {}

module.exports = {
    detail,
    list,
    addUser,
    removeUser,
    update,
};
