/*
 * @Author: hucheng
 * @Date: 2020-06-22 06:41:21
 * @Description: here is des
 */
import * as Koa from "koa";
import * as koaBody from "koa-body";
import * as Static from "koa-static";
import * as Views from "koa-views";
import * as path from "path";
import router from "./app/routers";
import config from "./app/config";
import { logger, accessLogger } from "./app/log4j/logger";
import model from "./app/models/index";

const app = new Koa();
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
    Views(path.join(__dirname, "./views"), {
        extension: "ejs",
    })
);
app.use(Static(path.join(__dirname, "./static")));
app.use(router.routes()).use(router.allowedMethods());
export default app;
