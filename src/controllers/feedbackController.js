const Feedback = require('../models/Retour');

// Récupérer tous les feedbacks avec les infos sur l'élève et l'UE
const getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findAll();
        res.json(feedback);  
    } catch (err) {
        res.status(500).json({ error: err.message });  
    }
};



module.exports = {
    getAllFeedback
};
