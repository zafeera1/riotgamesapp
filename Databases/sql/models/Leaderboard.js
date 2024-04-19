const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Leaderboard = sequelize.define('Leaderboard', {
  leaderboard_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  leaderboard_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Leaderboard;
