const { DataTypes } = require('sequelize');

module.exports = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imagePath: {
    type: DataTypes.STRING,
  },
  textReview: {
    type: DataTypes.STRING,
  },
}