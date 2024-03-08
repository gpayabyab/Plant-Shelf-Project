const sequelize = require ('../config/connection');
const { User, Greenhouse, Plant} = require('../models');

const plantdata = require('./plantdata.json')
const users= require('./userdata.json');

const seedPlant = async () => {
  await sequelize.sync({ force: true });
  
  await Plant.bulkCreate(plantdata);

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of users) {
    const newGreenhouse = await Greenhouse.create({
      user_id: id,
    });
  }

  for (const { id } of users) {
    const newPlants = await Plant.create({
      user_id: id,
    });
  }
  
  process.exit(0);
};
seedPlant();
//module.exports = seedPlant;
