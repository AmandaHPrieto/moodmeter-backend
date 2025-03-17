const axios = require("axios");
require("dotenv").config();

const HF_API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3";
const HF_TOKEN = process.env.HF_TOKEN; // Dans .env

const callAI = async (prompt) => {
    try {
        const response = await axios.post(
            HF_API_URL,
            { inputs: prompt },
            { headers: { Authorization: `Bearer ${HF_TOKEN}` } }
        );
        return response.data;
    } catch (error) {
        console.error("AI API Error:", error.response?.data || error.message);
        throw new Error("AI service is unavailable");
    }
};

module.exports = { callAI };
