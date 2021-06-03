const User = require('./User');
const Passwords = require('./Passwords')

User.hasMany(Passwords,{
    foreignKey: 'user_id',
});

Passwords.belongTo(User,{
    foreignKey: 'user_id',
});

module.exports = {User, Passwords}