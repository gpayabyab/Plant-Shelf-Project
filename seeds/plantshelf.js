const sequelize = require ('../config/connection');
///import greenhouse and user data?
const { Plant } = require('../models');

//import userdata.json?
const plantdata = require('./plantdata.json')

const seedPlant = async () => {
  await sequelize.sync({ force: true });
  Plant.bulkCreate(plantdata);
  
  process.exit(0);
};
seedPlant();
//module.exports = seedPlant;
