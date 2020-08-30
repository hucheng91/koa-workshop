module.exports = {
    baseUrl: '',
    env: 'dev',
    redisConfig: {
        port: 6321,
        host: '127.0.0.1'
    },
    mySql: {
        port: 3306,
        host: 'localhost',
        pass: 'root',
        userName: 'root',
        database: 'koa-mysql-test'
    },
    logger: {
        applicationLevel: "debug",
        accessLevel: "debug"
    }
};