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
    const getData = () => {
        return new Promise((resolve, reject) => {
            try {
                let postdata = "";
                ctx.req.addListener('data', (data) => {
                    postdata += data
                })
                ctx.req.addListener("end",function(){
                    let parseData = parseQueryStr( postdata )
                    resolve( parseData )
                })
            } catch ( err ) {
                reject(err)
            }
        })
    }
    return getData().then(data => {
        console.log(data)
        array.push({
            id: array.length,
            ...data
        })
        ctx.body = {
            success: true
        }
    })
    
}
function parseQueryStr( queryStr ) {
    let queryData = {}
    let queryStrList = queryStr.split('&')
    console.log( queryStrList )
    for (  let [ index, queryStr ] of queryStrList.entries()  ) {
        let itemList = queryStr.split('=')
        queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
    }
    return queryData
}
module.exports = {
    detail,
    list,
    add
}