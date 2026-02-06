"use client"
import { useEffect } from "react"
import "@n8n/chat/style.css";


export function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl:
          "https://n8n.fluxia.cl/webhook/e4a06a72-4f02-4e56-993d-c0508c6169f8/chat",
        mode: "window",
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
        loadPreviousSession: true,
        showWelcomeScreen: false,
        initialMessages: [
          "👋 Hola! Soy el asistente virtual de Kalfú y estoy aquí para ayudarte."
        ],
        i18n: {
          en: {
            title: "Kalfú",
            subtitle: "Asistencia Virtual",
            inputPlaceholder: "Escribe aqui..",
          },
        },
      });
    });
  }, []);

  return null;
}
