const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
  app.get('/auth/user', (req, res) => {
    res.send({ user: req.user });
  });

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.post('/auth', async (req, res) => {
    const userData = {
      name: 'Jordan',
      dateCreated: new Date(),
      active: true
    };

    try {
      // create user instance
      const user = new User(userData);

      // store in database
      const response = await user.save();

      res.send(response);
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
