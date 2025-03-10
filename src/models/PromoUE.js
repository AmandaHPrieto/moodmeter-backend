const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db');

const PromoUE = sequelize.define('PromoUE', {
  promoId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'Promotions',
      key: 'id',
    },
  },
  ueId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'UEs',
      key: 'id',
    },
  },
}, {
  tableName: 'PromoUEs',
  timestamps: false, 
});

module.exports = PromoUE;
