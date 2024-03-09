const User = require('./User');
const Greenhouse = require('./Greenhouse');
const Plant = require('./Plant');
const GreenhousePlant = require('./GreenhousePlant')

User.hasOne(Greenhouse, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Greenhouse.belongsTo(User, {
  foreignKey: 'user_id',
});

Plant.belongsToMany(Greenhouse, {
  foreignKey: 'plant_id',
  through: GreenhousePlant
})

Greenhouse.belongsToMany(Plant, {
  foreignKey: 'greenhouse_id',
  through: GreenhousePlant
})


module.exports = { User, Greenhouse, Plant, GreenhousePlant };
