const router = require('express').Router();
const { greenhouse, plant } = require('../models');
const withAuth = require('../utils/auth');

// GET all plants in the greenhouse

router.get('/greenhouse',withAuth, async (req, res) => {
  try {
    const dbPlantData = await plant.findAll({
      include: [
        {
          model: plant,
          attributes: ['id',
          'title',
          'artist',
          'exhibition_date',
          'filename',
          'description',
         ],
        },
      ],
    });

    const plants = dbPlantData.map((plant) =>
      plant.get({ plain: true })
    );

    res.render('homepage', {
      plants,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all plants for PlantShelf
router.get('/plant',withAuth, async (req, res) => {
  try {
    const dbPlantData = await plant.findAll({
      include: [
        {
          model: plant,
          attributes: ['id',
          'plant_name', 
          'plant_type',
          'plant_height',
          'sunlight',
          'water', 
          'humidity'
         ],
        },
      ],
    });

    const plants = dbPlantData.map((plant) =>
      plant.get({ plain: true })
    );

    res.render('homepage', {
      plants,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
