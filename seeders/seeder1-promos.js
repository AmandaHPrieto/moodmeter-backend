'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertion des promotions
    await queryInterface.bulkInsert('Promotions', [
      { nom: 'LPMIAW3', createdAt: new Date(), updatedAt: new Date() },
      {  nom: 'DEUST1', createdAt: new Date(), updatedAt: new Date() },
      {  nom: 'DEUST2', createdAt: new Date(), updatedAt: new Date() },
    ]);
    },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Promotions', null, {});
  }
};
