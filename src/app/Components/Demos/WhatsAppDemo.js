'use client';
import { memo, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function WhatsAppDemoBase() {
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: "Bonjour 👋 Ici AetherIA. En 1 minute je comprends votre besoin, et on cale un appel de 15 min. Pour commencer, quel est votre enjeu principal ?" },
  ]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ enjeu: '', contexte: '', slot: '' });
  const [typing, setTyping] = useState(false);

  // Quick replies
  const repliesByStep = [
    ['Choisir une solution IA', 'Centraliser mes données'],
    ['PME', 'Startup', 'Indépendant'],
    ['Aujourd’hui 16:00 (15 min)', 'Demain 09:30 (15 min)', 'Vendredi 14:15 (15 min)'],
    ['Confirmer', 'Recommencer'],
  ];

  // Messages du bot (sans doublons)
  const botByStep = [
    (answers) => `Super, merci 👍. Pour situer un peu mieux, vous êtes plutôt dans le contexte d’une PME, d’une startup ou en indépendant ?`,
    (answers) => `Parfait 🙌. L’idée c’est de vous donner rapidement 1 à 2 pistes concrètes adaptées à « ${answers.enjeu} ».`,
    (answers) => `Top ✅ Voici le récap :  
- Enjeu : « ${answers.enjeu} »  
- Contexte : « ${answers.contexte} »  
- Créneau : « ${answers.slot} »  

Je vous envoie le lien de confirmation :  
https://calendly.com/agenceaetheria/15min`,
  ];

  const delay = (ms) => new Promise((r) => setTimeout(r, ms));

  const nextBotMessage = useCallback((nextStep, nextAnswers) => {
    const botFn = botByStep[nextStep - 1];
    if (!botFn) return null;
    return botFn(nextAnswers);
  }, []);

  const choose = useCallback(async (reply) => {
    // Ajout réponse utilisateur
    setMessages((m) => [...m, { id: Date.now(), from: 'user', text: reply }]);

    let nextStep = step + 1;
    const nextAnswers = { ...answers };

    if (step === 0) nextAnswers.enjeu = reply;
    if (step === 1) nextAnswers.contexte = reply;
    if (step === 2) nextAnswers.slot = reply;

    // Confirmation finale
    if (step === 3) {
      if (reply === 'Recommencer') {
        setMessages([{ id: Date.now() + 2, from: 'bot', text: "Pas de souci 👍 On reprend depuis le début. Quel est votre enjeu principal ?" }]);
        setStep(0);
        setAnswers({ enjeu: '', contexte: '', slot: '' });
        return;
      }
      setTyping(true);
      await delay(800);
      setMessages((m) => [
        ...m,
        { id: Date.now() + 1, from: 'bot', text: botByStep[2](answers) },
      ]);
      setTyping(false);
      setStep(3);
      return;
    }

    // Réponse principale du bot
    const primary = nextBotMessage(nextStep, nextAnswers);
    if (primary) {
      setTyping(true);
      await delay(800);
      setMessages((m) => [...m, { id: Date.now() + 1, from: 'bot', text: primary }]);
      setTyping(false);
    }

    // Bridge humain avant les créneaux (uniquement à l’étape 1 → 2)
    if (step === 1) {
      setTyping(true);
      await delay(1000);
      setMessages((m) => [
        ...m,
        { id: Date.now() + 2, from: 'bot', text: `Ok bien noté pour « ${nextAnswers.contexte} » 🙏` },
      ]);
      setTyping(false);

      setTyping(true);
      await delay(1200);
      setMessages((m) => [
        ...m,
        { id: Date.now() + 3, from: 'bot', text: `Voici 3 créneaux courts (15 min) pour en parler 👇` },
      ]);
      setTyping(false);
    }

    setAnswers(nextAnswers);
    setStep(nextStep);
  }, [step, answers, nextBotMessage]);

  const quickReplies = repliesByStep[Math.min(step, repliesByStep.length - 1)];

  return (
    <div className="rounded-xl border border-[var(--color-border)] p-4 bg-[var(--form-bg)]" role="region" aria-label="Conversation simulée WhatsApp">
      <div className="h-56 sm:h-64 overflow-y-auto space-y-2 mb-3" aria-live="polite">
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className={`max-w-[85%] sm:max-w-[80%] px-3 py-2 rounded-lg ${m.from === 'bot' ? 'bg-cyan-50 text-gray-900' : 'bg-gray-200 ml-auto text-gray-900'}`}
            >
              {m.text}
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[70%] px-3 py-2 rounded-lg bg-cyan-50 text-gray-900"
            >
              <span className="animate-pulse">AetherIA est en train d’écrire…</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick replies */}
      <div className="flex flex-wrap gap-2">
        {quickReplies.map((r) => (
          <button
            key={r}
            onClick={() => choose(r)}
            className="px-3 py-1.5 rounded-full border text-sm hover:bg-cyan-50/60 transition-colors"
            aria-label={`Réponse: ${r}`}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  );
}

export const WhatsAppDemo = memo(WhatsAppDemoBase);
