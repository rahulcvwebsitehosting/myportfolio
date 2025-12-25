import { GoogleGenAI } from "@google/genai";

export async function askRahulAI(question: string) {
  // Check browser connectivity first
  if (!navigator.onLine) {
    return "You appear to be offline. Please check your connection and try again.";
  }

  try {
    // Re-instantiate to ensure latest environment variables
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are the AI personal agent for Rahul S. 
        Rahul is a Web Developer, Engineering-Focused Product Builder, and CTO of a Green-Tech Startup.

        CORE IDENTITY:
        - Role: CTO at EcoBrick (climate-tech venture) & Freelance Developer.
        - Academic: 2nd Year B.E. Civil Engineering at Erode Sengunthar Engineering College (2023-2027).
        - Performance: CGPA 8.6/10.
        - Philosophy: Concept-first, application-driven. "I believe true learning happens when theory meets application."
        - Academic Engagements: Presented papers and participated in workshops at PSG College of Tech, Kongu Engineering College, KPR Institute, Sasurie College, SRM Institute (Chennai), and ESEC.
        - Brand: "I don't just build websites — I engineer solutions."

        PROJECTS:
        - Hostel Planner: AI room layout tool.
        - Surya Clothing: Boutique site.
        - TypeArena: Multiplayer typing game.
        - Mohan Hot’n Chat & OSB Chats: West Mambalam restaurant platforms.
        - TunnelViz: Tunnel engineering educational platform.
        - EcoBrick: Green-tech platform (In Progress).

        STRICT COMMUNICATION GUIDELINES:
        1. ALWAYS RETURN A SINGLE SENTENCE. Be extremely concise and direct.
        2. PERSONALITY: Intelligent, engineering-focused, professional, and zero-fluff.
        3. NO GREETINGS: Do not say "Hi", "Hello", or "I'm happy to help". Just provide the requested data.
        4. CONTACT PRIVACY: Only provide contact details (email: rahulshyam2006@outlook.com, LinkedIn, etc.) if the user explicitly asks for contact information.`,
        temperature: 0.1,
      }
    });

    const text = response.text;
    if (!text) {
      return "AI returned an empty response. Reach Rahul at rahulshyam2006@outlook.com.";
    }

    return text;
  } catch (error: any) {
    console.error("Gemini AI Error:", error);
    
    const errMsg = error?.message?.toLowerCase() || "";
    
    // Specific error mapping for user feedback
    if (errMsg.includes("fetch") || errMsg.includes("network")) {
      return "Connection error. AI service is currently unreachable.";
    }
    
    if (errMsg.includes("429") || errMsg.includes("quota")) {
      return "AI limit reached. Please try again in a minute or email Rahul directly.";
    }
    
    if (errMsg.includes("safety") || errMsg.includes("blocked")) {
      return "Query filtered for safety. Please ask about Rahul's work or background.";
    }

    if (errMsg.includes("key") || errMsg.includes("401") || errMsg.includes("403")) {
      return "AI access error. Please reach out to Rahul via email.";
    }

    return "AI is temporarily unavailable. Reach Rahul at rahulshyam2006@outlook.com.";
  }
}