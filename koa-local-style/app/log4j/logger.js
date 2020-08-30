const path = require("path");
const log4js = require("koa-log4");
const { logger, env } = require("../config");
console.log(logger);
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
        default: { appenders: ["out"], level: logger.applicationLevel },
        access: { appenders: ["access"], level: "info" },
        application: {
            appenders: ["application"],
            level: logger.applicationLevel,
        },
    },
});

exports.accessLogger = () => log4js.koaLogger(log4js.getLogger("access")); //记录所有访问级别的日志
exports.logger = log4js.getLogger(env === "prod" ? "application" : "default"); //记录所有应用级别的日志
