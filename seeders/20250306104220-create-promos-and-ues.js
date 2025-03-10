'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertion des promotions
    await queryInterface.bulkInsert('Promotions', [
      { nom: 'LPMIAW3', createdAt: new Date(), updatedAt: new Date() },
      { nom: 'DEUST1', createdAt: new Date(), updatedAt: new Date() },
      { nom: 'DEUST2', createdAt: new Date(), updatedAt: new Date() },
    ]);

    // Insertion des UEs
    await queryInterface.bulkInsert('UEs', [
      { nom: 'UEL315', enseignantId: 1, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL311', enseignantId: 2, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL314', enseignantId: 3, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL222', enseignantId: 1, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL205', enseignantId: 2, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL204', enseignantId: 3, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL220', enseignantId: 1, createdAt: new Date(), updatedAt: new Date() },
      { nom: 'UEL313', enseignantId: 3, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UEs', null, {});
    await queryInterface.bulkDelete('Promotions', null, {});
  }
};
