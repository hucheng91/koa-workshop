const fs = require('fs');
const path = require('path');
const { getConnection } = require('../db/mysql');
const User = require('./user');
let modelObj = {};
fs.readdirSync(__dirname).filter(function(file) {
    console.log(file);
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
})
    .forEach(function(file) {
        const  model = require(path.join(__dirname, file));
        modelObj[model.name] = model;
    });
Object.keys(modelObj).forEach(function(modelName) {
    if (modelObj[modelName].associate) {
        modelObj[modelName].associate(modelObj);
    }
});
modelObj.sequelize = getConnection();
module.exports = modelObj;