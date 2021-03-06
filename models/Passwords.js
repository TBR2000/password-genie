const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.KEY);

class Passwords extends Model {
  decryptPassword(passwordData) {
    return cryptr.decrypt(passwordData);
  }
}

Passwords.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },

        website: {
            type: DataTypes.STRING,
            allowNull: false
        },

        url: {
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
        hooks: {
            beforeCreate: async (passwordData) => {
              passwordData.saved_password = await cryptr.encrypt(passwordData.saved_password);
              return passwordData;
            },
            beforeBulkUpdate: async (passwordData) => {
              passwordData.attributes.saved_password = await cryptr.encrypt(passwordData.attributes.saved_password);
              return passwordData;
            },
          },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: 'passwords',
}
    
);

module.exports = Passwords