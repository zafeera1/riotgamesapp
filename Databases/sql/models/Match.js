const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Player = require('./Player');

const Match = sequelize.define('Match', {
  match_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  match_datetime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  winner_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  loser_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  // Add other match-related columns as needed
});

Match.belongsTo(Player, { foreignKey: 'winner_id', as: 'Winner' });
Match.belongsTo(Player, { foreignKey: 'loser_id', as: 'Loser' });

module.exports = Match;
