const Feedback = require('../models/Retour');
const { Sequelize } = require('sequelize');
const UE = require('../models/UE');
const { callAI } = require("../services/aiServices");
const axios = require("axios");

// Récupérer tous les feedbacks avec les infos sur l'élève et l'UE
const getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findAll();
        res.json(feedback);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Ajouter un feedback
const addFeedback = async (req, res) => {
    const { clarte_consigne, difficulte, reactivite_enseignant, ressenti_global, eleveId, ueId } = req.body;
    try {
        const newFeedback = await Feedback.create({
            clarte_consigne,
            difficulte,
            reactivite_enseignant,
            ressenti_global,
            eleveId,
            ueId
        });
        res.status(201).json(newFeedback);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Calculer la moyenne des feedbacks
const getAverageFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.findAll({
            attributes: [
                'ueId',
                [Sequelize.fn('AVG', Sequelize.col('clarte_consigne')), 'moyenne_clarte'],
                [Sequelize.fn('AVG', Sequelize.col('difficulte')), 'moyenne_difficulte'],
                [Sequelize.fn('AVG', Sequelize.col('reactivite_enseignant')), 'moyenne_reactivite'],
                [Sequelize.fn('AVG', Sequelize.col('ressenti_global')), 'moyenne_ressenti']
            ],
            group: ['ueId'],
            include: [{ model: UE, attributes: ['nom'] }]
        });

        res.json(feedbacks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des feedbacks' });
    }
};


// Expliquer la moyenne des feedbacks des étudiants
const summarizeFeedback = async (req, res) => {
    try {
        // Récupération des moyennes des feedbacks
        const feedbackResponse = await axios.get('http://localhost:5000/feedback/moyenne');
        const feedbackData = feedbackResponse.data;

        // Préparation du prompt
        const prompt = `Tu es un assistant pédagogique. Résume les retours des étudiants pour chaque UE de manière fluide et naturelle en une phrase. 
Ajoute une suggestion d'amélioration si nécessaire en évitant les répétitions inutiles et en reformulant les idées pour plus de clarté. 

Voici les évaluations : 

${feedbackData.map((feedback) => 
    `- ${feedback.UE.nom} : Clarté des consignes ${feedback.moyenne_clarte}/5, ` +
    `Difficulté ${feedback.moyenne_difficulte}/5, ` +
    `Réactivité ${feedback.moyenne_reactivite}/5, ` +
    `Ressenti global ${feedback.moyenne_ressenti}/5.`
).join('\n')}

Réponds sous ce format et évite les structures répétitives :

- UEL315 : Les consignes sont claires et la difficulté est jugée accessible. L'enseignant est réactif, et le ressenti général est positif. Des exercices plus stimulants pourraient rendre le cours plus engageant.

`



        // Envoi du prompt à l'API IA
        const aiResponse = await callAI(prompt);

        // Vérifier et extraire le texte généré
        let generatedText = "Pas de réponse valide reçue.";
        if (aiResponse && Array.isArray(aiResponse) && aiResponse[0]?.generated_text) {
            generatedText = aiResponse[0].generated_text; // Extraction correcte
        }

        // Retourner une chaîne de caractères, pas un objet
        res.json({ summary: generatedText });

    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ error: 'Erreur lors de la synthèse' });
    }
};



module.exports = {
    getAllFeedback, addFeedback, getAverageFeedback, summarizeFeedback
};
