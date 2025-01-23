import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { Products } from "@/data-list";

export const characterAssistant: CreateAssistantDTO = {
  name: "Mary",
  language: "es",
  model: {
    provider: "openai",
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    // @ts-ignore
    systemPrompt:
      "'" +
      `Eres un asistente virtual para la venta de plantas artificiales de eterna verde. Tu tarea es ayudar a los clientes con información sobre los productos del catálogo, responder preguntas sobre características, tamaños, métodos de pago, y opciones de entrega a domicilio. 
    
            {
            "catalogo": ${JSON.stringify(Products)}
            }

    - Si un cliente menciona un producto específico, proporciona información relevante, como el precio, tamaño, disponibilidad, y siempre incluye el enlace al producto y llamar a la siguiente funcion finalizeDetail.
    - Si no entiendes la consulta, solicita aclaraciones.
    - Se hacen entregas a domicilio a todo el peru.
    - Los pagos son con yape, plin, transferencias y contraentrega.
    - No proporciones información que no esté en el catálogo.` +
      "'",
    functions: [
      {
        name: "finalizeDetail",
        description:
          "Cada que se envie un mensaje, se debe llamar a esta función y brindarle el link o enlace en el chat del producto para que el cliente pueda ver más detalles.",
        parameters: {
          type: "object",
          properties: {
            key: {
              type: "string",
              description:
                "Brindar el link o enlace del producto para que el cliente pueda ver más detalles.",
            },
          },
        },
      },
    ],
  },
  voice: {
    provider: "11labs",
    voiceId: "paula",
  },
  firstMessage:
    "Hola, soy Mary deseas alguna información sobre algunos de nuestros productos?",
};
