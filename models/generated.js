const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class generated extends Model {}

generated.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
          }, 
        },
    {          
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: 'generated', 
    });

module.exports = generated