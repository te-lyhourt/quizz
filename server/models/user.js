const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    min:3,
    required: true
  }
}, {collection: 'users'});

const user = mongoose.model('users', userSchema);

module.exports = {user}