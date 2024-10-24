import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBa3nZyfnmSNyiqMeOrampBY_ji3Fi1mcE';
const apiKey = process.env.REACT_APP_GEMINI_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const getGeminiAIResponse = async (prompt) => {

 const model = genAI.getGenerativeModel({ model: "gemini-pro" });
 const result = await model.generateContent(prompt);
 const response = await result.response;
 const text = await response.text();

  return text;
};

