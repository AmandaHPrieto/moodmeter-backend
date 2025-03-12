'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertion des promotions
    await queryInterface.bulkInsert('Promotions', [
      { id:3, nom: 'LPMIAW3', createdAt: new Date(), updatedAt: new Date() },
      { id:1, nom: 'DEUST1', createdAt: new Date(), updatedAt: new Date() },
      { id:2, nom: 'DEUST2', createdAt: new Date(), updatedAt: new Date() },
    ]);
    },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Promotions', null, {});
  }
};
