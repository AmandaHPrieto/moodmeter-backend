const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const ArchiveRetour = sequelize.define('ArchiveRetour', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  retourId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Retours',
      key: 'id',
    },
  },
  archivedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
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
  tableName: 'ArchiveRetours',
  timestamps: true,
});

module.exports = ArchiveRetour;
