const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db'); 

const UE = sequelize.define('UE', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  promoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Promotions', 
      key: 'id',
    },
  },
  enseignantId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', 
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
  tableName: 'UEs',
  timestamps: true,
});

module.exports = UE;
