const User = require('./User');
const Passwords = require('./Passwords')
const generated = require('../models/generated')

User.hasMany(Passwords,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Passwords.belongsTo(User,{
    foreignKey: 'user_id',
});

User.hasOne(generated,{
    foreignKey: 'user_id',
});

generated.belongsTo(User,{
    foreignKey: 'user_id',
});

module.exports = {User, Passwords, generated}