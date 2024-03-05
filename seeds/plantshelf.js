const sequelize = require ('../config/connection');
const { Plant } = require('../models');

const plantdata = require('./plantdata.json')

const seedPlant = async () => {
  await sequelize.sync({ force: true });
  Plant.bulkCreate(plantdata);
  
  process.exit(0);
};
seedPlant();
//module.exports = seedPlant;
