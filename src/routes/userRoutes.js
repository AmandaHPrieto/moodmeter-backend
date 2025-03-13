const express = require('express');
const router = express.Router();
const userController= require ('../controllers/userController');
const getUserDetails = require('../controllers/userController'); 
const verifyToken = require( '../middleware/authMiddleware');

// Route pour récupérer tous les utilisateurs
//router.get('/users', verifyToken, userController.getAllUsers);

//Route pour récupérer un utilisateur via son ID
//router.get('/users/:id', verifyToken, userController.getUserById);

//Route pour afficher les détails de l'utilisateur
router.get('/Userhome', verifyToken, getUserDetails);

module.exports= router; 
console.log("userController:", userController); 
console.log("verifyToken:", verifyToken);
