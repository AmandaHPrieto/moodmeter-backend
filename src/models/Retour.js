const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Retour = sequelize.define('Retour', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  clarte_consigne: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  difficulte: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  reactivite_enseignant: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  ressenti_global: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  eleveId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', 
      key: 'id',
    },
  },
  ueId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'UEs', 
      key: 'id',
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
}, {
  tableName: 'Retours',
  timestamps: true,
});

module.exports = Retour;
