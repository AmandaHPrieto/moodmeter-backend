'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ElevePromo', [
      {
        eleveId: 1, 
        promoId: 2,
      },
      {
        eleveId: 2,
        promoId: 3,
      },
      {
        eleveId: 3,
        promoId: 1,
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ElevePromo', null, {});
  }
};
