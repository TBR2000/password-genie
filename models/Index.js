const User = require('./User');
const Passwords = require('./Passwords')

User.hasMany(Passwords,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Passwords.belongsTo(User,{
    foreignKey: 'user_id',
});

module.exports = {User, Passwords}