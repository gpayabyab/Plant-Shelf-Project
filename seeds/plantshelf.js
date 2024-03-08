const sequelize = require ('../config/connection');
const { User, Greenhouse, Plant} = require('../models');

const plantdata = require('./plantdata.json')
const users= require('./userdata.json');
const seedGHP = require('./greenhousePlant')

const seedPlant = async () => {
  await sequelize.sync({ force: true });
  
  await Plant.bulkCreate(plantdata);


  const userData = await User.bulkCreate(users, {

    individualHooks: true,
    returning: true,
  });

  for (const { id } of userData) {
   
    const newGreenhouse = await Greenhouse.create({
      user_id: id,
    });
  }

  await seedGHP();



  
  process.exit(0);
};
seedPlant();
//module.exports = seedPlant;
