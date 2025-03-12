'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertion des feedbacks dans la table Retours
    await queryInterface.bulkInsert('Retours', [
      {
        clarte_consigne: 4, 
        difficulte: 3,      
        reactivite_enseignant: 5, 
        ressenti_global: 4, 
        eleveId: 6,         
        ueId: 1,            
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clarte_consigne: 5,
        difficulte: 2,
        reactivite_enseignant: 4,
        ressenti_global: 3,
        eleveId: 7,
        ueId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clarte_consigne: 3,
        difficulte: 4,
        reactivite_enseignant: 5,
        ressenti_global: 4,
        eleveId: 8,
        ueId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clarte_consigne: 4,
        difficulte: 3,
        reactivite_enseignant: 3,
        ressenti_global: 4,
        eleveId: 9,
        ueId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clarte_consigne: 2,
        difficulte: 5,
        reactivite_enseignant: 2,
        ressenti_global: 3,
        eleveId: 10,
        ueId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Suppression des feedbacks insérés
    await queryInterface.bulkDelete('Retours', null, {});
  }
};
