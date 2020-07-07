/*
 * @Author: hucheng
 * @Date: 2020-07-08 06:06:37
 * @Description: here is des
 */ 
const array = [{id: 0, name: '王二'}, {id: 1, name: '赵三'}]

function list(ctx) {
    ctx.body = {
        data: array,
        success: true
    };
}
function detail(ctx) {
    const id = ctx.params.id;
    const { request, response } = ctx;
    console.log(request.headers)
    console.log(request.query) //  { name: '3434' }
    console.log(request.method) // GET
    console.log(request.url) // /user/detail/1?name=3434
    console.log(request.originalUrl) // /user/detail/1?name=3434
    console.log(request.href) //  /user/detail/1?name=3434
    console.log(request.path) // /user/detail/1
    console.log(request.querystring) // name=3434
    console.log(request.type)
    ctx.response.set("hc-test", 1)
    ctx.response.body = {
        data: array[id],
        success: true
    }
    ctx.response.status = 200
}

module.exports = {
    detail,
    list
}