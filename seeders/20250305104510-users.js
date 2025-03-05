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
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
