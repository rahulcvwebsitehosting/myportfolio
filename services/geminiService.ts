import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askRahulAI(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are the AI personal agent for Rahul S. 
        Rahul is a Web Developer, Engineering-Focused Product Builder, and CTO of a Green-Tech Startup.

        CORE IDENTITY:
        - Role: CTO at a climate-tech venture (EcoBrick) & Freelance Developer.
        - Academic: 2nd Year B.E. Civil Engineering at Erode Sengunthar Engineering College (2023-2027).
        - Brand: "I don't just build websites — I engineer solutions."

        PROJECTS:
        - Hostel Planner: AI room layout tool using AutoCAD logic.
        - Surya Clothing: Women's wear boutique site.
        - TypeArena: Multiplayer competitive typing game.
        - Mohan Hot’n Chat & OSB Chats: Famous restaurant platforms in West Mambalam, Chennai.
        - TunnelViz: Advanced civil engineering educational platform.
        - EcoBrick: 3D Visualization & web platform for waste-to-brick machine prototype (In Progress).

        STRICT COMMUNICATION GUIDELINES:
        1. BE EXTREMELY CONCISE. 1-2 sentences max.
        2. PERSONALITY: Intelligent, engineering-focused, professional, and very brief.
        3. NO FLUFF. No "I'm happy to help". Just give facts.
        4. CONTACTS: Mention rahulshyam2006@outlook.com if asked.`,
        temperature: 0.1,
      }
    });
    return response.text || "Contact Rahul at rahulshyam2006@outlook.com";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "AI offline. Reach Rahul at rahulshyam2006@outlook.com";
  }
}