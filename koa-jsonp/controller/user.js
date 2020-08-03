// @ts-nocheck
/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:21:50
 * @Description: here is des
 */ 
const array = [{id: 0, name: '王二'}, {id: 1, name: '赵三'}]

function list(ctx) {
    const body = {
        data: array,
        success: true
    };
    let callbackName = ctx.query.callback || 'callback'
    // jsonp的script字符串
    let jsonpStr = `;${callbackName}(${JSON.stringify(body)})`
    // 用text/javascript，让请求支持跨域获取
    ctx.type = 'text/javascript'
    // 输出jsonp字符串
    ctx.body = jsonpStr
}
function detail(ctx) {
    const id = ctx.params.id;
    ctx.body = {
        data: array[id],
        success: true
    }
}

module.exports = {
    detail,
    list
}