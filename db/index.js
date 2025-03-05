const { Sequelize } = require('sequelize');
require('dotenv').config(); 

// Créer une instance Sequelize avec les informations de connexion à la BDD, qui sont dans dotenv
const sequelize = new Sequelize(
  process.env.DB_NAME,       
  process.env.DB_USER,       
  process.env.DB_PASSWORD,   
  {
    host: process.env.DB_HOST,  
    dialect: 'mysql',          
    port: process.env.DB_PORT 
  }
);

module.exports = sequelize;
