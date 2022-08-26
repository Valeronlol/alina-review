require('dotenv').config();
const sequelize = require('./instance');
const user = require('./models/users');

const User = sequelize.define('User', user);

module.exports = {
  sequelize,
  User,
}