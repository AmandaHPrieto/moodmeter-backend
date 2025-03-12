const Feedback = require('../models/Retour');
const { Sequelize } = require('sequelize');
const UE = require('../models/UE');

// Récupérer tous les feedbacks avec les infos sur l'élève et l'UE
const getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findAll();
        res.json(feedback);  
    } catch (err) {
        res.status(500).json({ error: err.message });  
    }
};

// Ajouter un feedback
const addFeedback = async (req, res) => {
    const { clarte_consigne, difficulte, reactivite_enseignant, ressenti_global, eleveId, ueId } = req.body;
    try {
        const newFeedback = await Feedback.create({
            clarte_consigne,
            difficulte,
            reactivite_enseignant,
            ressenti_global,
            eleveId,
            ueId
        });
        res.status(201).json(newFeedback);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Calculer la moyenne des feedbacks
const getAverageFeedback = async (req, res) => {
    try {
      const feedbacks = await Feedback.findAll({
        attributes: [
          'ueId',
          [Sequelize.fn('AVG', Sequelize.col('clarte_consigne')), 'moyenne_clarte'],
          [Sequelize.fn('AVG', Sequelize.col('difficulte')), 'moyenne_difficulte'],
          [Sequelize.fn('AVG', Sequelize.col('reactivite_enseignant')), 'moyenne_reactivite'],
          [Sequelize.fn('AVG', Sequelize.col('ressenti_global')), 'moyenne_ressenti']
        ],
        group: ['ueId'],
        include: [{ model: UE, attributes: ['nom'] }] 
      });
  
      res.json(feedbacks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la récupération des feedbacks' });
    }
  };


module.exports = {
    getAllFeedback, addFeedback, getAverageFeedback
};
