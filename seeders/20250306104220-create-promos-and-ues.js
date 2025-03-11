'use strict';
const { User } = require('../models');

const enseignants = await User.findAll({
  where: { role: 'enseignant' },
  attributes: ['id', 'nom', 'prenom'],
});

// Utilisation des enseignants dans le seeder
await queryInterface.bulkInsert('UEs', [
  { id: 1, nom: 'UEL315', enseignantId: enseignants.find(e => e.nom === 'Crespin').id, createdAt: new Date(), updatedAt: new Date() },
  { id: 2, nom: 'UEL311', enseignantId: enseignants.find(e => e.nom === 'Vignoles').id, createdAt: new Date(), updatedAt: new Date() },
]);

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertion des promotions
    await queryInterface.bulkInsert('Promotions', [
      { id: 1, nom: 'LPMIAW3', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, nom: 'DEUST1', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, nom: 'DEUST2', createdAt: new Date(), updatedAt: new Date() },
    ]);

    // Insertion des UEs avec enseignants ajustés
    await queryInterface.bulkInsert('UEs', [
      { id: 1, nom: 'UEL315', enseignantId: 1, createdAt: new Date(), updatedAt: new Date() }, // Benoît Crespin
      { id: 2, nom: 'UEL311', enseignantId: 2, createdAt: new Date(), updatedAt: new Date() }, // Philippe Vignoles
      { id: 3, nom: 'UEL314', enseignantId: 3, createdAt: new Date(), updatedAt: new Date() }, // Sofiane Hadjadj
      { id: 4, nom: 'UEL222', enseignantId: 4, createdAt: new Date(), updatedAt: new Date() }, // Baptiste Saint-Pierre
      { id: 5, nom: 'UEL205', enseignantId: 2, createdAt: new Date(), updatedAt: new Date() }, // Philippe Vignoles
      { id: 6, nom: 'UEL204', enseignantId: 4, createdAt: new Date(), updatedAt: new Date() }, // Baptiste Saint-Pierre
      { id: 7, nom: 'UEL220', enseignantId: 4, createdAt: new Date(), updatedAt: new Date() }, // Baptiste Saint-Pierre
      { id: 8, nom: 'UEL313', enseignantId: 1, createdAt: new Date(), updatedAt: new Date() }, // Benoît Crespin
    ]);

    // Ajout des relations dans PromoUE
    await queryInterface.bulkInsert('PromoUEs', [
      // LPMIAW3 et UEs UEL311, UEL313, UEL314, UEL315
      { promoId: 1, ueId: 1 }, // LPMIAW3 - UEL315
      { promoId: 1, ueId: 2 }, // LPMIAW3 - UEL311
      { promoId: 1, ueId: 3 }, // LPMIAW3 - UEL314
      { promoId: 1, ueId: 8 }, // LPMIAW3 - UEL313

      // DEUST2 et UEs UEL204, UEL205, UEL220, UEL222
      { promoId: 3, ueId: 4 }, // DEUST2 - UEL222
      { promoId: 3, ueId: 5 }, // DEUST2 - UEL205
      { promoId: 3, ueId: 6 }, // DEUST2 - UEL204
      { promoId: 3, ueId: 7 }, // DEUST2 - UEL220
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Suppression des données dans PromoUEs
    await queryInterface.bulkDelete('PromoUEs', null, {});

    // Suppression des données dans UEs
    await queryInterface.bulkDelete('UEs', null, {});

    // Suppression des données dans Promotions
    await queryInterface.bulkDelete('Promotions', null, {});
  }
};
