const express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = require('../..//db');

const router = express.Router();

// Route pour récupérer la moyenne des critères par UE
router.get('/feedbacks/moyenne-ressenti', async (req, res) => {
  try {
    const feedbacks = await sequelize.query(
      `SELECT ueId, 
              AVG(clarte_consigne) AS moyenne_clarte,
              AVG(difficulte) AS moyenne_difficulte,
              AVG(reactivite_enseignant) AS moyenne_reactivite,
              AVG(ressenti_global) AS moyenne_ressenti
       FROM Retours 
       GROUP BY ueId`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    res.json(feedbacks); 
  } catch (error) {
    console.error("Erreur lors du calcul des moyennes des ressentis :", error);
    res.status(500).json({ error: 'Erreur serveur, impossible de récupérer les moyennes.' });
  }
});

module.exports = router;
