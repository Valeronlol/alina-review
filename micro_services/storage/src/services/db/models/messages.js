const { DataTypes } = require('sequelize');

module.exports = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  message: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
}