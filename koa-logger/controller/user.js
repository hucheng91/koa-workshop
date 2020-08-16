// @ts-nocheck
/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:21:50
 * @Description: here is des
 */ 
const array = [{id: 0, name: '王二', email: 'wanger@gmail.com'}, {id: 1, name: '赵三', email: 'wanger@gmail.com'}]

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
    // 获取文件路径，这里注意，我在前端 发起请求的时候，FormData 的 key 是 file，所以这里用 *.file，可以接着看多文件上传 
        const { path } =  ctx.request.files.file 
        const { name, email } = ctx.request.body // 获取 request body 字段
        console.log(path)
        array.push({
            id: array.length,
            imgUrl: path.split("/static")[1],
            name,
            email
        })
        ctx.body = {
            uccess: true
        }
}
function add(ctx) {
    const { file1, file2 } =  ctx.request.files // 这里注意，我在前端 发起请求的时候，FormData 的 key 是 file，所以这里用 *.file 
    const path1 = file1.path
    const path2 = file2.path
    const { name, email } = ctx.request.body
    console.log(path1, path2)
    array.push({
        id: array.length,
        imgUrl: path1.split("/static")[1],
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