const Feedback = require('../models/Retour');
const { Sequelize } = require('sequelize');
const UE = require('../models/UE');


const getUeDetails = async (req, res) => {
  const {ueId} =req.params;

  try {
    const ueDetails = await UE.findOne({
      where: { id: ueId},
    });
    if (!ueDetails){
      return res.status(404).json({ message : "L'UE n'a pas été trouvée"});
    }
    res.json(ueDetails);
  }
  catch(error){
    console.error("Il y a eu une erreur lors de la tentative de récupétation de l'UE: ", error);
    res.status(500).json({message: "Une erreur serveur est survenue :", error: error.message})
  }
};
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
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "Utilisateur non authentifié." });
}

    const { ueId, clarte_consigne, difficulte, reactivite_enseignant, ressenti_global} = req.body;
    //récupération de l'ID de l'utrilisateur connecté
    const eleveId=req.user.id;
     try {
      //recherche existence de l'UE via sa clé primaire
      const ue= await UE.findByPk(ueId);
      if(!ue) {
        return res.status(404).json({message:"UE non trouvée"});
      }
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
    getUeDetails, getAllFeedback, addFeedback, getAverageFeedback
};
