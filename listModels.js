require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1/models?key=" + process.env.GEMINI_API_KEY
        );
        const data = await response.json();
        console.log("✅ Available models:", data);
    } catch (error) {
        console.error("❌ Gemini API Error:", error);
    }
}

listModels();
