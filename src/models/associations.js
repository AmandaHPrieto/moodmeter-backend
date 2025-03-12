// src/models/associations.js
const User = require('./User');
const Promotion = require('./Promotion');
const UE = require('./UE');
const ElevePromo = require('./ElevePromo');
const PromoUE = require('./PromoUE');
const Retour = require('./Retour');
const ArchiveRetour = require('./ArchiveRetour');

// Relations entre les utilisateurs et les promotions
User.belongsTo(Promotion, { foreignKey: 'promoId' });
Promotion.hasMany(User, { foreignKey: 'promoId' });


// Relations entre les promotions et les UE
Promotion.belongsToMany(UE, { through: PromoUE, foreignKey: 'promoId' });
UE.belongsToMany(Promotion, { through: PromoUE, foreignKey: 'ueId' });

// Relations entre les retours et les UE
Retour.belongsTo(UE, { foreignKey: 'ueId' });
Retour.belongsTo(User, { foreignKey: 'eleveId' });

// Relation entre ArchiveRetour et Retour
ArchiveRetour.belongsTo(Retour, { foreignKey: 'retourId' });

module.exports = { User, Promotion, UE, ElevePromo, PromoUE, Retour, ArchiveRetour };
