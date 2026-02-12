'use client';
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export default function N8nChat() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://agenceaetheria.com/webhook/a234bc67-b81c-438a-aae2-47bb5efd3ec2/chat', // 👉 ton vrai webhook
      // Optionnel : tu peux ajouter d'autres options ici selon la doc
      // initialMessages: ['Salut 👋', 'Comment puis-je t’aider ?'],
      // showWelcomeScreen: true,
      // defaultLanguage: 'fr',
    });
  }, []);

  return null;
}
