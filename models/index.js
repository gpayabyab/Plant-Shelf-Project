const User = require('./user');
const Greenhouse = require('./greenhouse');
const Plants = require('./plant');

User.hasOne(Greenhouse, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Greenhouse.belongsTo(User, {
  foreignKey: 'user_id',
});

Greenhouse.hasMany(Plants, {
  foreignKey: 'greenhouse_id',
  onDelete: 'CASCADE',
});

Plant.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Greenhouse, Plant };
