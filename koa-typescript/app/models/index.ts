import * as fs from "fs";
import * as path from "path";
import { getConnection } from "../db/mysql";
const modelObj = {};
fs.readdirSync(__dirname)
    .filter(function (file) {
        console.log(file);
        return (
            file.indexOf(".") !== 0 &&
            file !== "index.js" &&
            file.slice(-3) === ".js"
        );
    })
    .forEach(function (file) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const model = require(path.join(__dirname, file));
        modelObj[model.name] = model;
    });
Object.keys(modelObj).forEach(function (modelName) {
    if (modelObj[modelName].associate) {
        modelObj[modelName].associate(modelObj);
    }
});
export const sequelize = getConnection();
export default modelObj;
