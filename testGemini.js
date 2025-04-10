require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testGemini() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
        const result = await model.generateContent("Say hello!");
        console.log(result);
    } catch (error) {
        console.error("Gemini API Error:", error);
    }
}

testGemini();
