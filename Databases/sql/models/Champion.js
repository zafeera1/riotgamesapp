const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Champion = sequelize.define('Champion', {
  champion_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  champion_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Champion;
