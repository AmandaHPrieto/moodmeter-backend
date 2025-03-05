const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const ElevePromo = sequelize.define('ElevePromo', {
  eleveId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'Users', 
      key: 'id',
    },
  },
  promoId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'Promotions', // Référence la table Promotions
      key: 'id',
    },
  },
}, {
  tableName: 'ElevePromo',
  timestamps: false, 
});

module.exports = ElevePromo;
