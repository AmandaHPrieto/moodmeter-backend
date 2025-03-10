const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); 
const verifyToken = require( '../middleware/authMiddleware');

// Route pour récupérer tous les utilisateurs
router.get('/users', verifyToken, userController.getAllUsers);

//Route pour récupérer un utilisateur via son ID
router.get('/users/:id', verifyToken, userController.getUserById);

module.exports = router;
