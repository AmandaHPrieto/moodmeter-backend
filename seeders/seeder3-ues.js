'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // Insertion des UEs
    await queryInterface.bulkInsert('UEs', [
      { nom: 'UEL315', enseignantId: 1, promoId: 3, createdAt: new Date(), updatedAt: new Date() }, //Benoît
      { nom: 'UEL311', enseignantId: 2, promoId: 3, createdAt: new Date(), updatedAt: new Date() }, //Philippe
      { nom: 'UEL314', enseignantId: 3, promoId: 3, createdAt: new Date(), updatedAt: new Date() }, //Sofiane
      { nom: 'UEL222', enseignantId: 4, promoId: 2, createdAt: new Date(), updatedAt: new Date() }, //Baptiste
      { nom: 'UEL205', enseignantId: 2, promoId: 2, createdAt: new Date(), updatedAt: new Date() }, //Philippe
      { nom: 'UEL204', enseignantId: 4, promoId: 2, createdAt: new Date(), updatedAt: new Date() }, //Baptiste
      { nom: 'UEL220', enseignantId: 4, promoId: 2, createdAt: new Date(), updatedAt: new Date() }, //Baptiste
      { nom: 'UEL313', enseignantId: 1, promoId: 3, createdAt: new Date(), updatedAt: new Date() }, //Benoît
      { nom: 'UEL103', enseignantId: 2, promoId: 1, createdAt: new Date(), updatedAt: new Date() }, //Philippe

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UEs', null, {});
  }
};
