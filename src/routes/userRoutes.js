const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController'); 


// Route pour récupérer tous les utilisateurs
router.get('/users', userController.getAllUsers);

module.exports = router;
