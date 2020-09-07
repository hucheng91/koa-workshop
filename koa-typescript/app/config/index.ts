import baseConfig from "./base.env";
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const envConfig = require(`./${process.env.NODE_ENV || "dev"}.env`).default;
const config: Config = Object.assign(baseConfig, envConfig, {
    env: process.env.NODE_ENV,
});
export interface RedisConfig {
    port: number;
    host: string;
}
export interface LoggerLevel {
    applicationLevel: string;
    accessLevel: string;
}
export interface MysqlConfig {
    port: number;
    host: string;
    pass: string;
    userName: string;
    database: string;
    dialect: string;
}
export interface Config {
    baseUrl: string;
    env: string;
    redisConfig: RedisConfig;
    mySql?: MysqlConfig;
    logger: LoggerLevel;
}
export default {
    ...config,
};
