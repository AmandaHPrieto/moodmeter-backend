'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@example.com',
        pseudo: 'admin',
        password: await bcrypt.hash('password123', 10),
        role: 'admin',
        nom: 'Admin',
        prenom: 'Super',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'eleve@example.com',
        pseudo: 'Bibiche',
        password: await bcrypt.hash('password123', 10),
        role: 'eleve',
        nom: 'Biche',
        prenom: 'Jean',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'baptiste@etu.unilim.fr',
        pseudo: 'baptiste',
        password: await bcrypt.hash('password123', 10),
        role: 'enseignant',
        nom: 'Saint-Pierre',
        prenom: 'Baptiste',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'philippe@etu.unilim.fr',
        pseudo: 'philippe',
        password: await bcrypt.hash('password123', 10),
        role: 'enseignant',
        nom: 'Vignoles',
        prenom: 'Philippe',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'sofiane@etu.unilim.fr',
        pseudo: 'sofiane',
        password: await bcrypt.hash('password123', 10),
        role: 'enseignant',
        nom: 'Hadjadj',
        prenom: 'Sofiane',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'benoit@etu.unilim.fr',
        pseudo: 'benoit',
        password: await bcrypt.hash('password123', 10),
        role: 'enseignant',
        nom: 'Crespin',
        prenom: 'Benoît',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'amanda.hery-prieto@etu.unilim.fr',
        pseudo: 'amanda',
        password: await bcrypt.hash('password123', 10),
        role: 'eleve',
        nom: 'Hery-Prieto',
        prenom: 'Amanda',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'abigail.germon@etu.unilim.fr',
        pseudo: 'abigail',
        password: await bcrypt.hash('password123', 10),
        role: 'eleve',
        nom: 'Germon',
        prenom: 'Abigail',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'estelle.dabrinville@etu.unilim.fr',
        pseudo: 'estelle',
        password: await bcrypt.hash('password123', 10),
        role: 'eleve',
        nom: 'Dabrinville',
        prenom: 'Estelle',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'clement.lonsagne@etu.unilim.fr',
        pseudo: 'clement',
        password: await bcrypt.hash('password123', 10),
        role: 'eleve',
        nom: 'Lonsagne',
        prenom: 'Clément',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'estephe.djaguidi@etu.unilim.fr',
        pseudo: 'estephe',
        password: await bcrypt.hash('password123', 10),
        role: 'eleve',
        nom: 'Djaguidi',
        prenom: 'Estephe',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
