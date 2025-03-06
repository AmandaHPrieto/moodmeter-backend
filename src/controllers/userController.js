const User = require('../models/User'); 

// Fonction pour récupérer tous les utilisateurs
function getAllUsers() {
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
}

module.exports = {
    getAllUsers,
};