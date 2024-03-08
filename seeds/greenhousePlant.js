const {GreenhousePlant} = require('../models')

const greenhousePlantData = [
    {
        greenhouse_id: 1,
        plant_id: 15
    },
    {
        greenhouse_id: 3,
        plant_id: 15
    },
    {
        greenhouse_id: 1,
        plant_id: 5
    },
    {
        greenhouse_id: 1,
        plant_id: 20
    },
    {
        greenhouse_id: 1,
        plant_id: 10
    },
    {
        greenhouse_id: 2,
        plant_id: 1
    },
    {
        greenhouse_id: 2,
        plant_id: 6
    }
];

const seedGHP= ()=> GreenhousePlant.bulkCreate(greenhousePlantData)

module.exports = seedGHP