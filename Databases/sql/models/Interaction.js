const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Player = require('./Player');

const Interaction = sequelize.define('Interaction', {
  interaction_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  interaction_type: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Interaction.belongsTo(Player, { foreignKey: 'player_id' });

module.exports = Interaction;
