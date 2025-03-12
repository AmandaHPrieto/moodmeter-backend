const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Route pour récupérer tous les feedbacks
router.get('/feedback', feedbackController.getAllFeedback);


module.exports = router;
