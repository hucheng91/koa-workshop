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
    mongodb: {
        port: 27017,
        host: 'localhost',
        database: 'koa-mongo-test',
        poolSize : 40,
    },
    logger: {
        applicationLevel: "debug",
        accessLevel: "debug"
    }
}