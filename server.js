require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');  
const authRoutes = require('./src/routes/authRoutes');
const feedbackRoutes = require('./src/routes/feedbackRoutes');
const userRoutes = require('./src/routes/userRoutes');

// Modèles
require('./src/models/User');
require('./src/models/UE');
require('./src/models/Retour');
require('./src/models/PromoUE');
require('./src/models/ElevePromo');
require('./src/models/Promotion');
require('./src/models/ArchiveRetour');
require('./src/models/associations');

const app = express();

// Configuration de CORS
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,POST,PUT,DELETE', 
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));  
app.use(express.json());      

// Routes
// Authentification
app.use(authRoutes);

// Gestion des utilisateurs
app.use(userRoutes);

// Routes pour les feedbacks
app.use('/api', feedbackRoutes);

// Routes de test
app.get('/', (req, res) => {
    res.send('🥳 Le back-end de Moodmeter marche, woop woop !');
});

// Synchronisation avec la base de données et démarrage du serveur
sequelize.sync({ alter: true })
  .then(() => {
      console.log('La base de données est synchronisée');
      app.listen(process.env.PORT || 5000, () => {  
        console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
    });
    
  })
  .catch((err) => {
      console.error('Erreur lors de la synchronisation de la base de données:', err);
  });
