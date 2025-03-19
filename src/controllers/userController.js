const User = require('../models/User'); 
const Promotion = require('../models/Promotion'); 
const UE = require('../models/UE'); 


const getUserDetails = async (req, res) => {
  try {
    // Vérifier l'ID utilisateur récupéré depuis req.user
    const userId = req.user.id;
    console.log("ID utilisateur récupéré:", userId);

    // Vérifier les détails de l'utilisateur avant de les renvoyer
    const userDetails = await User.findOne({
      where: { id: userId },

      attributes: ['id', 'nom', 'prenom', 'pseudo', 'email', 'role', 'image'],

      include: [
        {
          model: Promotion,
          attributes: ['id', 'nom'],
          include: {
            model: UE,
            attributes: ['id', 'nom'],
          },
        },
      ],
    });

    //console.log("Détails utilisateur trouvés:", userDetails);
    //userDetails.Promotion.UEs.forEach(ue => {
      //console.log("UE trouvée:", ue);
    //});
//preparation des données à transmettre
    if (userDetails) {
      const userDetailsFetch={
    id: userDetails.id,
    nom: userDetails.nom,
    prenom: userDetails.prenom,
    pseudo: userDetails.pseudo,
    email: userDetails.email,
    role: userDetails.role,
    image: userDetails.image,
    role: userDetails.role,
    promotion: userDetails.Promotion ? {
      id: userDetails.Promotion.id,
      nom: userDetails.Promotion.nom,
      ues: userDetails.Promotion.UEs.map(ue => ({
        id: ue.id,
        nom: ue.nom,
      })),
    } : null, // pour les profs=null
  };
  console.log("Données formatées envoyées :", userDetailsFetch);
      res.json(userDetailsFetch); // Retourne les données recupérées 
    }
    else {
      console.log("Utilisateur introuvable.");
      res.status(404).json({ message: 'Utilisateur introuvable.' });
    }
  } 
  catch (err) {
    console.error("Erreur lors de la récupération des données de l'utilisateur:", err);
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};
module.exports = getUserDetails ;
console.log("Modèle User :", User);
