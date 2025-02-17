require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = process.env.SECRET_KEY || "secretKey";  

// Connexion à MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err.message);
  } else {
    console.log("Connecté à MySQL");
  }
});

// Route d'inscription
app.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Le nom est obligatoire"),
    body("email").isEmail().withMessage("Email invalide"),
    body("password").isLength({ min: 8 }).withMessage("Le mot de passe doit contenir au moins 8 caractères"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    // Vérifie si l'email existe déjà
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
      if (err) return res.status(500).json({ message: "Erreur serveur." });
      if (result.length > 0) {
        return res.status(400).json({ message: "Cet email est déjà utilisé." });
      }

      // Hash du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
      db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword], (err) => {
        if (err) {
          return res.status(500).json({ message: "Erreur serveur." });
        }
        res.status(201).json({ message: "Utilisateur créé avec succès" });
      });
    });
  }
);

// Route de connexion
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur serveur" });
    if (result.length === 0) return res.status(400).json({ message: "Utilisateur non trouvé" });

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });

    // Génère un token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ message: "Connexion réussie", token });
  });
});

app.listen(5000, () => {
  console.log(" Serveur démarré sur http://localhost:5000");
});
