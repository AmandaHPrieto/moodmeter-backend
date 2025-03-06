const express = require('express');
const { registerUser } = require('../controllers/authController');
const { body } = require('express-validator');

const router = express.Router();

router.post('/register', 
  [
    body("nom").notEmpty().withMessage("Le nom est obligatoire"),
    body("prenom").notEmpty().withMessage("Le prénom est obligatoire"),
    body("pseudo").notEmpty().withMessage("Le pseudo est obligatoire"),
    body("email").isEmail().withMessage("Email invalide"),
    body("password").isLength({ min: 8 }).withMessage("Le mot de passe doit contenir au moins 8 caractères"),
  ], 
  registerUser
);

module.exports = router;
