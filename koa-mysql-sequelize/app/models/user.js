const { Sequelize, DataTypes, Model } = require('sequelize')
const { getConnection } = require('../db/mysql')
class User extends Model {
}
User.init(
    {
        id: { 
            type: DataTypes.INTEGER({ length: 11, unsigned: true }),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            comment: 'id',
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '名称',
        },
        email: {
            type: DataTypes.STRING,
            
            allowNull: false,
            comment: '邮箱',
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '图片url',
    },
    }, {
        sequelize: getConnection(),
        modelName: 'User',
        tableName: 'user',
        underscored: true,
        comment: '任务表',
        freezeTableName: true,
        timestamps: true,
})
module.exports = User