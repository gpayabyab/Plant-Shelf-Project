const router = require('express').Router();
const { User, Plant } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const plantData = await Plant.findAll({    
      order: [['name', 'ASC']],
    });

    const plants = plantData.map((project) => project.get({ plain: true }));

    res.render('greenhouse', {
      plants,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
