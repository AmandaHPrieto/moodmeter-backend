const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db'); 
const Promotion = require('./Promotion'); 

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  pseudo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('enseignant', 'eleve', 'admin'),
    allowNull: false,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  promoId: {
    type: DataTypes.INTEGER,
    allowNull: true, 
    references: {
      model: 'Promotions', 
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL', 
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
  tableName: 'Users', 
  timestamps: true, 
});

// Association entre user et promo
User.belongsTo(Promotion, { foreignKey: 'promoId' });
Promotion.hasMany(User, { foreignKey: 'promoId' });

module.exports = User;
