import { GoogleGenAI, Type, Schema } from "@google/genai";
import { LessonPlanRequest, LessonPlanResponse } from '../types';

// We use Gemini 2.5 Flash to simulate the speed and efficiency of the local Phi-3 model
const MODEL_NAME = "gemini-2.5-flash";

export const generateLessonPlan = async (request: LessonPlanRequest): Promise<LessonPlanResponse> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });

  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING, description: "Title of the lesson plan" },
      bnccCodes: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: "List of BNCC codes (e.g., EF05MA01)"
      },
      objective: { type: Type.STRING, description: "Main pedagogical objective" },
      duration: { type: Type.STRING, description: "Total duration (e.g., 50 min)" },
      activities: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            time: { type: Type.STRING }
          },
          required: ["title", "description", "time"]
        }
      },
      evaluation: { type: Type.STRING, description: "How to evaluate the students" }
    },
    required: ["title", "bnccCodes", "objective", "duration", "activities", "evaluation"]
  };

  const prompt = `
    Você é o DesplugaIA, um assistente pedagógico especializado na BNCC (Base Nacional Comum Curricular) do Brasil.
    Crie um plano de aula detalhado para:
    Ano/Série: ${request.grade}
    Disciplina: ${request.subject}
    Tema: ${request.topic}

    O plano deve ser prático, objetivo e adequado para escolas públicas brasileiras.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.4, // Low temperature for consistent, structured results like the offline model
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as LessonPlanResponse;
  } catch (error) {
    console.error("Error generating lesson plan:", error);
    throw error;
  }
};