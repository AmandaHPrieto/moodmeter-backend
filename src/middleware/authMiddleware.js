const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log("Header Authorization reçu :", token);
  if (!token) {
    return res.status(403).json({ message: 'Un token est requis pour l\'authentification' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = decoded;
    console.log("Utilisateur décodé :", req.user);
  } catch (err) {
    return res.status(401).json({ message: 'Token invalide' });
  }

  return next();
};

module.exports = verifyToken;
