// @ts-nocheck
/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:21:50
 * @Description: here is des
 */
import { findAll, findById, add, remove } from "../services/user";
import { Context } from "koa";
interface AddRequestBody {
    name: string;
    email: string;
}
async function list(ctx: Context) {
    const data = await findAll();
    ctx.body = {
        data: data,
        success: true,
    };
}
async function detail(ctx: Context) {
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
        data: data,
        success: true,
    };
}
async function addUser(ctx: Context) {
    const { path } = ctx.request.files.file;
    const { name, email } = <AddRequestBody>ctx.request.body; // 获取 request body 字段
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
async function removeUser(ctx: Context) {
    const id = ctx.params.id;
    const data = await remove(id);
    ctx.body = {
        data: data[0],
        success: true,
    };
}
async function update() {
    console.log("update");
}
export { detail, list, addUser, removeUser, update };
