'use strict';

module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        UserPassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        First: {
            type: DataTypes.STRING
        },
        Last: {
            type: DataTypes.STRING
        },
        Joined: {
            type: DataTypes.DATE()
        }
    },{
        paranoid: true,
        timestamps: false,
        freezeTableName: true,
        tableName: 'Users',
        classMethods: {
            associate: function(models){

            }
        },
        instanceMethods: {

        }
    });
    return Users;
};