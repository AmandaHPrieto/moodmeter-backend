'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // Insertion des UEs
    await queryInterface.bulkInsert('UEs', [
      { nom: 'UEL315', enseignantId: 4, promoId: 1, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL311', enseignantId: 2, promoId: 2, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL314', enseignantId: 3, promoId: 3, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL222', enseignantId: 5, promoId: 1, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL205', enseignantId: 2, promoId: 2, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL204', enseignantId: 4, promoId: 3, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL220', enseignantId: 5, promoId: 1, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL313', enseignantId: 3, promoId: 2, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UEs', null, {});
  }
};
