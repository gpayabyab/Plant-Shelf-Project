const router = require('express').Router();
const { User, Plant, Greenhouse, GreenhousePlant } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const greenhouseData = await Greenhouse.findOne({    
      where: { user_id: req.session.userId},
      include: [
        User,
        Plant
      ]
    });

    const greenhouse = greenhouseData.get({ plain: true });
    console.log(greenhouse);

    res.render('greenhouse', {
      ...greenhouse,
      emptySlots: Array.from(
        {length: 6-greenhouse.plants.length}
      ),
      logged_in: req.session.loggedIn,
    });
  } catch (err) { 
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
