'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // On récupère les IDs valides : eleveId de la table 'ElevePromo' et id de la table 'Ues'
    const [eleves, ues] = await Promise.all([
      queryInterface.sequelize.query('SELECT eleveId FROM ElevePromo', { type: Sequelize.QueryTypes.SELECT }),
      queryInterface.sequelize.query('SELECT id FROM Ues', { type: Sequelize.QueryTypes.SELECT }),
    ]);

    // On extrait les IDs des résultats
    const eleveIds = eleves.map(eleve => eleve.eleveId);
    const ueIds = ues.map(ue => ue.id);

    // On insère les données dans la table 'Retours'
    return queryInterface.bulkInsert('Retours', [
        {
          clarte_consigne: 4,
          difficulte: 3,
          reactivite_enseignant: 5,
          ressenti_global: 4,
          eleveId: eleveIds[2],
          ueId: ueIds[5], 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clarte_consigne: 2,
          difficulte: 5,
          reactivite_enseignant: 3,
          ressenti_global: 2,
          eleveId: eleveIds[1],
          ueId: ueIds[6], 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clarte_consigne: 5,
          difficulte: 2,
          reactivite_enseignant: 4,
          ressenti_global: 5,
          eleveId: eleveIds[2],
          ueId: ueIds[1], 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clarte_consigne: 3,
          difficulte: 4,
          reactivite_enseignant: 2,
          ressenti_global: 3,
          eleveId: eleveIds[1],
          ueId: ueIds[4], 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clarte_consigne: 1,
          difficulte: 5,
          reactivite_enseignant: 1,
          ressenti_global: 2,
          eleveId: eleveIds[1],
          ueId: ueIds[2], 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clarte_consigne: 4,
          difficulte: 2,
          reactivite_enseignant: 5,
          ressenti_global: 4,
          eleveId: eleveIds[2],
          ueId: ueIds[3], 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Retours', null, {});
  }
};
