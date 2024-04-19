const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Player = require('./Player');
const Leaderboard = require('./Leaderboard');

const PlayerRank = sequelize.define('PlayerRank', {
  rank_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  leaderboard_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rank_position: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

PlayerRank.belongsTo(Player, { foreignKey: 'player_id' });
PlayerRank.belongsTo(Leaderboard, { foreignKey: 'leaderboard_id' });

module.exports = PlayerRank;
