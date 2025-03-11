const User = require('../models/User'); 
const sequelize = require('../../db.js'); 


// récupérer tous les utilisateurs (ne pas inclure la route dedans directement)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const getUserById = async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await User.findByPk(userId);
  
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};  


const getUserDetails = async (req, res) => {
  const userId = req.user.id; // ID de l'utilisateur connecté extrait du token JWT

  try {
    const userData = await sequelize.query(
      `SELECT 
        U.id AS eleveId,
        U.nom,
        U.prenom,
        U.pseudo,
        U.email,
        U.image AS pic,
        P.nom AS promotion,
        GROUP_CONCAT(DISTINCT UE.nom) AS courses
      FROM Users U
      LEFT JOIN ElevePromo EP ON U.id = EP.eleveId
      LEFT JOIN Promotions P ON EP.promoId = P.id
      LEFT JOIN PromoUEs PU ON P.id = PU.promoId
      LEFT JOIN UEs UE ON PU.ueId = UE.id
      WHERE U.id = :userId
      GROUP BY U.id, P.nom`,
      {
        replacements: { userId },
        type: sequelize.QueryTypes.SELECT
      }
    );

    // Retourne les données de l'étudiant
    res.json(userData[0]);
  } catch (err) {
    console.error("Erreur lors de la récupération des données étudiant :", err);
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

module.exports = { getUserById, getAllUsers, getUserDetails };

