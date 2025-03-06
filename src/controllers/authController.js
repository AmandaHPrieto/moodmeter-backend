const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/User'); 

// Route d'inscription
const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { nom, prenom, pseudo, email, password, role } = req.body;
  
    try {
      // Vérifie si l'email existe déjà
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: "Cet email est déjà utilisé." });
      }
  
      // Hash du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Créer un nouvel utilisateur
      const newUser = await User.create({
        nom,
        prenom,
        pseudo,
        email,
        role,
        password: hashedPassword
      });
  
      return res.status(201).json({ message: "Utilisateur créé avec succès" });
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur:", error);
        return res.status(500).json({ message: "Erreur serveur, voici l'erreur : ", error: error.message });
      }
  };
  
  module.exports = {
    registerUser,
  };
