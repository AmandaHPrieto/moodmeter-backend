'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertion des feedbacks dans la table Retours
    await queryInterface.bulkInsert('Retours', [
      // UE 1
      { clarte_consigne: 4, difficulte: 3, reactivite_enseignant: 5, ressenti_global: 4, eleveId: 6, ueId: 1, createdAt: new Date(), updatedAt: new Date() },
      { clarte_consigne: 5, difficulte: 2, reactivite_enseignant: 4, ressenti_global: 3, eleveId: 7, ueId: 1, createdAt: new Date(), updatedAt: new Date() },

      // UE 2
      { clarte_consigne: 3, difficulte: 4, reactivite_enseignant: 5, ressenti_global: 4, eleveId: 8, ueId: 2, createdAt: new Date(), updatedAt: new Date() },
      { clarte_consigne: 4, difficulte: 3, reactivite_enseignant: 3, ressenti_global: 4, eleveId: 9, ueId: 2, createdAt: new Date(), updatedAt: new Date() },

      // UE 3
      { clarte_consigne: 2, difficulte: 5, reactivite_enseignant: 2, ressenti_global: 3, eleveId: 10, ueId: 3, createdAt: new Date(), updatedAt: new Date() },
      { clarte_consigne: 3, difficulte: 3, reactivite_enseignant: 4, ressenti_global: 3, eleveId: 11, ueId: 3, createdAt: new Date(), updatedAt: new Date() },

      // UE 4
      { clarte_consigne: 5, difficulte: 2, reactivite_enseignant: 5, ressenti_global: 5, eleveId: 6, ueId: 4, createdAt: new Date(), updatedAt: new Date() },
      { clarte_consigne: 4, difficulte: 4, reactivite_enseignant: 4, ressenti_global: 3, eleveId: 7, ueId: 4, createdAt: new Date(), updatedAt: new Date() },

      // UE 5
      { clarte_consigne: 3, difficulte: 5, reactivite_enseignant: 3, ressenti_global: 2, eleveId: 8, ueId: 5, createdAt: new Date(), updatedAt: new Date() },
      { clarte_consigne: 5, difficulte: 1, reactivite_enseignant: 5, ressenti_global: 4, eleveId: 9, ueId: 5, createdAt: new Date(), updatedAt: new Date() },

      // UE 6
      { clarte_consigne: 2, difficulte: 4, reactivite_enseignant: 3, ressenti_global: 3, eleveId: 10, ueId: 6, createdAt: new Date(), updatedAt: new Date() },
      { clarte_consigne: 4, difficulte: 2, reactivite_enseignant: 4, ressenti_global: 5, eleveId: 11, ueId: 6, createdAt: new Date(), updatedAt: new Date() },

      // UE 7
      { clarte_consigne: 5, difficulte: 3, reactivite_enseignant: 5, ressenti_global: 4, eleveId: 6, ueId: 7, createdAt: new Date(), updatedAt: new Date() },
      { clarte_consigne: 3, difficulte: 5, reactivite_enseignant: 2, ressenti_global: 2, eleveId: 7, ueId: 7, createdAt: new Date(), updatedAt: new Date() },

      // UE 8
      { clarte_consigne: 4, difficulte: 4, reactivite_enseignant: 4, ressenti_global: 4, eleveId: 8, ueId: 8, createdAt: new Date(), updatedAt: new Date() },
      { clarte_consigne: 2, difficulte: 5, reactivite_enseignant: 2, ressenti_global: 3, eleveId: 9, ueId: 8, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Suppression des feedbacks insérés
    await queryInterface.bulkDelete('Retours', null, {});
  }
};
