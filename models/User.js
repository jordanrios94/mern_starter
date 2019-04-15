const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  dateCreated: Date,
  active: Boolean
});

mongoose.model('users', userSchema);
