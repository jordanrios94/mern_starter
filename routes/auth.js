const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
  app.get('/auth', (req, res) => {
    res.send({ message: 'hello world tribal' });
  });

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
