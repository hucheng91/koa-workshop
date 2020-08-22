const baseConfig = require('./base.env')
const envConfig =  require(`./${process.env.NODE_ENV || 'dev'}.env`) 
module.exports = Object.assign(baseConfig, envConfig, {env: process.env.NODE_ENV})
