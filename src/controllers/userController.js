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
  try {
    const userId=req.user.id; 
    const userDetails = await User.findOne({
      where: {id: userId},
      attributes: ['id', 'nom', 'prenom', 'pseudo', 'email', 'image'],
      include: [//permet de rapatrier promo  liée à l id user
        {
          model : Promotion,
          attributes: ['id', 'nom'],
          include: {//permet de rapatrier les UE liées à l'id promo
            model: UE, 
            attributes: ['id', 'nom'],
            through: { attributes: []}// on evite de rapatrier les metadonnées inutiles
          },
        },
      ],
    });
      if(userDetails){
        res.json(userDetails);// Retourne les données de l'étudiant ou enseignant connecté
      }else {
        res.status(404).json({message: 'Utilisateur non trouvé.'});
      }
  } catch (err) {
    console.error("Erreur lors de la récupération des données de l'utilisateur:", err);
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

module.exports = { getUserById, getAllUsers, getUserDetails };

