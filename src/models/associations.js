const User = require('./User');
const Promotion = require('./Promotion');
const UE = require('./UE');
const Retour = require('./Retour');
const ArchiveRetour = require('./ArchiveRetour');

// Relations entre les utilisateurs et les promotions
User.belongsTo(Promotion, { foreignKey: 'promoId' });
Promotion.hasMany(User, { foreignKey: 'promoId' });

// Relation entre Promotion et UE : une UE n'appartient qu'à une promotion
Promotion.hasMany(UE, { foreignKey: 'promoId' });
UE.belongsTo(Promotion, { foreignKey: 'promoId' });

// Relations entre les retours et les UE
Retour.belongsTo(UE, { foreignKey: 'ueId' });
Retour.belongsTo(User, { foreignKey: 'eleveId' });
User.hasMany(Retour, { foreignKey: 'eleveId' });

// Relation entre ArchiveRetour et Retour
ArchiveRetour.belongsTo(Retour, { foreignKey: 'retourId' });

module.exports = { User, Promotion, UE, Retour, ArchiveRetour };
