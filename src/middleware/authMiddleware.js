const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log("Header Authorization reçu :", token);
  if (!token) {
    return res.status(403).json({ message: 'Un token est requis pour l\'authentification' });
  }

  try {  // Extraire le token (sans "Bearer ")
    const extractedToken = token.split(' ')[1];

    // Vérification et décodage du token
    const decoded = jwt.verify(extractedToken, process.env.JWT_SECRET);

    // Vérification explicite de l'expiration (facultative car gérée par jwt.verify)
    const now = Math.floor(Date.now() / 1000); // Temps actuel en secondes
    if (decoded.exp && decoded.exp < now) {
      return res.status(401).json({ message: 'Token expiré, veuillez vous reconnecter.' });
    }

    // Si tout est OK, ajouter l'utilisateur décodé à la requête
    req.user = decoded;
    console.log("Utilisateur décodé :", req.user);
   } 
   catch (err) {
    return res.status(401).json({ message: 'Token invalide' });
  }

  return next();
};

module.exports = verifyToken;
