require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');  
const authRoutes = require('./src/routes/authRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
// Auth
app.use(authRoutes);

// Routes de test
app.get('/', (req, res) => {
    res.send('🥳 Le back-end de Moodmeter marche, woop woop !');
});


// Synchroniser la base de données et démarrer le serveur
sequelize.sync({ force: true })  
  .then(() => {
      console.log('La base de données est synchronisée');
      app.listen(PORT, () => {
          console.log(`Server running on http://localhost:${PORT}`);
      });
  })
  .catch((err) => {
      console.error('Erreur lors de la synchronisation de la base de données:', err);
  });
