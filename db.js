const { Sequelize } = require("sequelize");
require("dotenv").config();

// Configurer l'instance Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nom de la base de données
  process.env.DB_USER, // Utilisateur
  process.env.DB_PASSWORD, // Mot de passe
  {
    host: process.env.DB_HOST, // Hôte
    dialect: "mysql", // Dialecte MySQL
    logging: false, // Désactive les logs (optionnel)
  }
);

// Tester la connexion
sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion réussie à la base de données MySQL avec Sequelize !");
  })
  .catch((err) => {
    console.error("Erreur de connexion à la base de données :", err);
  });

module.exports = sequelize;
