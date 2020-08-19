const baseConfig = require('./base.env')
const envConfig =  require(`./${process.env.NODE_ENV}.env`) 
module.exports = Object.assign(baseConfig, envConfig)
