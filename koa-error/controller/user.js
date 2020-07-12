// @ts-nocheck
/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:21:50
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
    const {name} = ctx.query
    console.log(name)
    if(!name) {
        ctx.throw(500,'name is required');
    }
    ctx.body = {
        data: array[id],
        success: true
    }
}

module.exports = {
    detail,
    list
}