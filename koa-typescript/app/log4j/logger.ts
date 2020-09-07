import * as path from "path";
import * as log4js from "koa-log4";
import config from "../config";
const { env } = config;
log4js.configure({
    appenders: {
        access: {
            type: "dateFile",
            pattern: "-yyyy-MM-dd.log", //生成文件的规则
            filename: path.join(process.cwd(), "logs", "access.log"), //生成文件名
        },
        application: {
            type: "dateFile",
            pattern: "-yyyy-MM-dd.log",
            filename: path.join(process.cwd(), "logs", "application.log"),
        },
        // 默认输出到控制台
        out: {
            type: "console",
        },
    },
    categories: {
        default: { appenders: ["out"], level: config.logger.applicationLevel },
        access: { appenders: ["access"], level: "info" },
        application: {
            appenders: ["application"],
            level: config.logger.applicationLevel,
        },
    },
});
// @ts-ignore
export const accessLogger = () => log4js.koaLogger(log4js.getLogger("access")); //记录所有访问级别的日志
export const logger = log4js.getLogger(
    env === "prod" ? "application" : "default"
); //记录所有应用级别的日志
