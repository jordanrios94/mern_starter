const express = require('express');
const mongoose = require('mongoose');

// Register models into mongoose
require('./models/User');

mongoose.connect(
  '',
  { useNewUrlParser: true }
);

const app = express();

require('./routes/auth')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('running on port: ' + PORT);
