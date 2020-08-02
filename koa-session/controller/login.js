/*
 * @Author: hucheng
 * @Date: 2020-07-05 18:39:54
 * @Description: here is des
 */ 
const { setSessionInfo, updateSessionInfo} = require('../utils/session')

function getUserInfo() {
    // 这里可能是从数据库获取数据，我简单的返回一些信息
    return {
        userName: "王二码字" + Math.floor(Math.random() * 10)
    }
}
function login(ctx) {
    const token = '121212-45dfgffgfg'
    console.log('ctx.res.header', ctx.response.header)
    ctx.response.header.token =  token
    ctx.app.userInfo = {
        name: '王二码字'
    }
    const uuid = setSessionInfo(getUserInfo())
    ctx.cookies.set(
        'SESSION_ID',  // key
        uuid, // value
        {
          domain: 'localhost',  // 写cookie所在的域名
          path: '/',       // 写cookie所在的路径
          maxAge: 10 * 60 * 1000, // cookie有效时长
          expires: new Date('2017-02-15'),  // cookie失效时间
          httpOnly: false,  // 是否只用于http请求中获取
          overwrite: false  // 是否允许重写
        }
    )
    ctx.redirect('/')
}


module.exports = {
    login
}