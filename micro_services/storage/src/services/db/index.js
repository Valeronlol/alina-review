const sequelize = require('./instance');
const user = require('./models/users');
const review = require('./models/reviews');
const message = require('./models/messages');

const User = sequelize.define('User', user);
const Review = sequelize.define('Review', review);
const Message = sequelize.define('Message', message);

module.exports = {
  sequelize,
  User,
  Review,
  Message,
}