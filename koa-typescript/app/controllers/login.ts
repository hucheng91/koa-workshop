/*
 * @Author: hucheng
 * @Date: 2020-07-05 18:39:54
 * @Description: here is des
 */

function login(ctx) {
    const token = "121212-45dfgffgfg";
    console.log("ctx.res.header", ctx.response.header);
    ctx.response.header.token = token;
    ctx.app.userInfo = {
        name: "王二码字",
    };
    ctx.cookies.set(
        "token", // key
        token, // value
        {
            domain: "localhost", // 写cookie所在的域名
            path: "/", // 写cookie所在的路径
            maxAge: 10 * 60 * 1000, // cookie有效时长
            expires: new Date("2017-02-15"), // cookie失效时间
            httpOnly: false, // 是否只用于http请求中获取
            overwrite: false, // 是否允许重写
        }
    );
    ctx.redirect("/");
}

export { login };
