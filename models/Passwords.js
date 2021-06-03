const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Passwords extends Model {}

Passwords.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },

        password_for: {
            type: DataTypes.STRING,
            allowNull: false
        },  

        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        saved_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },  

        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },          
    },
    {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: 'passwords',
}
    
);

module.exports = Passwords