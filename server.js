require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes de test
app.get('/', (req, res) => {
    res.send('Moodmeter-Backend fonctionne !');
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
