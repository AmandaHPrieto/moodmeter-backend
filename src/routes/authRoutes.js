const express = require('express');
const router= express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const { body } = require('express-validator');



// Route d'inscription
router.post('/register', 
  [
    body("nom").notEmpty().withMessage("Le nom est obligatoire"),
    body("prenom").notEmpty().withMessage("Le prénom est obligatoire"),
    body("pseudo").notEmpty().withMessage("Le pseudo est obligatoire"),
    body("email").isEmail().withMessage("Email invalide"),
    body("role").notEmpty().withMessage("Le role est obligatoire"),
    body("password").isLength({ min: 8 }).withMessage("Le mot de passe doit contenir au moins 8 caractères"),
  ], 
  registerUser
);

// Route de connexion
router.post('/login', 
  [
    body("email").isEmail().withMessage("Email invalide"),
    body("password").notEmpty().withMessage("Le mot de passe est obligatoire"),
  ], 
  loginUser
);

module.exports = router;
