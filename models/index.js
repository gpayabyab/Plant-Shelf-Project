const User = require('./Driver');
const Greenhouse = require('./License');
const Plants = require('./Car');

User.hasOne(Greenhouse, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Greenhouse.belongsTo(User, {
  foreignKey: 'user_id',
});

Greenhouse.hasMany(Plant, {
  foreignKey: 'greenhouse_id',
  onDelete: 'CASCADE',
});

Plant.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Greenhouse, Plant };
