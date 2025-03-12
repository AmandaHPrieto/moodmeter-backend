const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Route pour récupérer tous les feedbacks
router.get('/feedback', feedbackController.getAllFeedback);

// Route pour ajouter un feedback
router.post('/feedback', feedbackController.addFeedback);

// Route pour la moyenne des feedbacks d'une UE
router.get('/feedback/moyenne', feedbackController.getAverageFeedback);


module.exports = router;
