// @ts-nocheck
/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:21:50
 * @Description: here is des
 */ 
const array = [{id: 0, name: '王二', email: 'wanger@gmail.com'}, {id: 1, name: '赵三', email: 'zhaosan@gmail.com'}]

function list(ctx) {
    const body = {
        data: array,
        success: true
    };
    ctx.body = body
}
function detail(ctx) {
    const id = ctx.params.id;
    ctx.body = {
        data: array[id],
        success: true
    }
}
function add(ctx) {
    const { path } =  ctx.request.files.file
    const { name, email } = ctx.request.body
    console.log(path)
    array.push({
        id: array.length,
        imgUrl: path.split("/static")[1],
        name,
        email
    })
    ctx.body = {
        success: true
    }
}

module.exports = {
    detail,
    list,
    add
}