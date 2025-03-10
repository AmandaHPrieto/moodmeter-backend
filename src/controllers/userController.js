const User = require('../models/User'); 

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

module.exports = {
    getAllUsers, getUserById
};