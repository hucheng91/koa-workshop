/*
 * @Author: hucheng
 * @Date: 2020-06-22 06:41:21
 * @Description: here is des
 */
const Koa = require("koa");
const views = require("koa-views");
const static = require("koa-static");
const koaBody = require("koa-body");
const path = require("path");
const app = new Koa();
const router = require("./app/routers");
const config = require("./app/config");
const { logger, accessLogger } = require("./app/log4j/logger");
const model = require("./app/models/index");

app.use(accessLogger());
app.use(async (ctx, next) => {
    ctx.model = model;
    await next();
});
app.on("error", (err) => {
    logger.error(err);
});
app.use(async (ctx, next) => {
    ctx.config = config;
    await next();
});
app.use(
    koaBody({
        multipart: true, // 支持文件上传
        formidable: {
            uploadDir: path.join(__dirname, "static/upload/"), // 设置文件上传目录
            keepExtensions: true, // 保持文件的后缀
            maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
        },
    })
);
// 加载模板引擎
app.use(
    views(path.join(__dirname, "./views"), {
        extension: "ejs",
    })
);
app.use(static(path.join(__dirname, "./static")));
app.use(router.routes()).use(router.allowedMethods());
module.exports = app;
