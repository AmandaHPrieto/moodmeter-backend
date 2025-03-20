const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const { summarizeFeedback } = require("../controllers/feedbackController");
const verifyToken = require( '../middleware/authMiddleware');


// Route pour récupérer tous les feedbacks
router.get('/feedback', feedbackController.getAllFeedback);

// Route pour ajouter un feedback avec ajout de la verification du token utilisateur
router.post('/feedback', verifyToken, feedbackController.addFeedback);

// Route pour la moyenne des feedbacks d'une UE
router.get('/feedback/moyenne', feedbackController.getAverageFeedback);

// Route pour résumer un feedback
router.post('/feedback/summarize', feedbackController.summarizeFeedback);

//Route pour récupérer les données de l'UE
router.get('/ue/:ueId',  feedbackController.getUeDetails);


module.exports = router;
