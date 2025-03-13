require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');  
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require ('./src/routes/userRoutes');
const feedbackRoutes = require('./src/routes/feedbackRoutes');
// Modèles
require('./src/models/User');
require('./src/models/UE');
require('./src/models/Retour');
require('./src/models/Promotion');
require('./src/models/ArchiveRetour');
require('./src/models/associations');



const app = express();
app.use(cors());
app.use(express.json());

// Routes
// Auth
app.use( authRoutes);
//Users
app.use(userRoutes);
// Feedback
app.use(feedbackRoutes);

// Routes de test
app.get('/', (req, res) => {
    res.send('🥳 Le back-end de Moodmeter marche, woop woop !');
});


// Synchroniser la base de données et démarrer le serveur
sequelize.sync({ force: false})  
  .then(() => {
      console.log('La base de données est synchronisée');
      app.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
    
  })
  .catch((err) => {
      console.error('Erreur lors de la synchronisation de la base de données:', err);
  });
