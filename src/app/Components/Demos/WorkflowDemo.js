'use client';
import { memo, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  { key: 'input', label: 'Entrée', detail: 'Formulaire, E-mail' },
  { key: 'analyse', label: 'Analyse', detail: 'Validation, Nettoyage, Enrichissement' },
  { key: 'agent', label: 'Agent IA', detail: 'Classification, Décision, Priorisation' },
  { key: 'routing', label: 'Routage', detail: 'Tri selon règles ou conditions' },
  { key: 'crm', label: 'Envoi CRM', detail: 'Intégration à HubSpot, Salesforce, etc.' },
  { key: 'followup', label: 'Suivi (optionnel)', detail: 'E-mail de confirmation au client' },
];

function WorkflowDemoBase() {
  const [idx, setIdx] = useState(-1);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  const start = useCallback(async () => {
    if (running) return;
    setFinished(false);
    setRunning(true);
    for (let i = 0; i < STEPS.length; i += 1) {
      setIdx(i);
      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => setTimeout(r, 650));
    }
    setRunning(false);
    setFinished(true);
  }, [running]);

  const reset = useCallback(() => {
    setIdx(-1);
    setRunning(false);
    setFinished(false);
  }, []);

  return (
    <div
      className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--form-bg)] p-6 md:p-8 overflow-hidden"
      role="region"
      aria-label="Démonstration Workflow"
    >
      <p className="text-sm mb-4 opacity-80">Optimisez vos processus simplement avec AetherIA.</p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <span className="text-sm opacity-70">Parcours en 6 étapes, ~5–10 s</span>
        <div className="flex gap-2">
          <button
            onClick={start}
            disabled={running}
            className="px-4 py-2 rounded-md border bg-transparent hover:bg-white/5 transition-colors disabled:opacity-50 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--form-bg)]"
            aria-busy={running}
            aria-live="polite"
          >
            {running && (
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z" />
              </svg>
            )}
            {running ? 'En cours…' : 'Démarrer'}
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 rounded-md border bg-transparent hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--form-bg)]"
          >
            Réinitialiser
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-between gap-3" role="list" aria-label="Étapes du workflow">
        {STEPS.map((s, i) => (
          <div key={s.key} className="flex-1 flex items-center" role="listitem" aria-current={i === idx ? 'step' : undefined}>
            <motion.div
              initial={false}
              animate={{ backgroundColor: i <= idx ? 'rgba(8,145,178,0.12)' : 'transparent' }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border w-full ${i <= idx ? 'border-cyan-500 text-cyan-200' : ''}`}
            >
              <div className={`h-3 w-3 rounded-full ${i <= idx ? 'bg-cyan-400' : 'bg-gray-400/50'}`} />
              <span className="text-sm font-medium">{s.label}</span>
            </motion.div>
            {i < STEPS.length - 1 && (
              <div className={`h-[2px] w-6 mx-2 ${i < idx ? 'bg-cyan-400' : 'bg-gray-400/40'}`} />
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden grid grid-cols-1 gap-3" role="list" aria-label="Étapes du workflow (mobile)">
        {STEPS.map((s, i) => (
          <div
            key={s.key}
            className={`px-3 py-2 rounded-lg border ${i <= idx ? 'bg-cyan-600/10 border-cyan-500 text-cyan-200' : 'bg-transparent'}`}
            role="listitem"
            aria-current={i === idx ? 'step' : undefined}
          >
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${i <= idx ? 'bg-cyan-400' : 'bg-gray-400/50'}`} />
              <span className="text-sm font-medium">{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      <motion.div
        className="mt-5 p-4 rounded-lg border bg-[var(--color-bg)]/40"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 140, damping: 16 }}
        role="status"
        aria-live="polite"
      >
        <p className="text-sm opacity-80">{idx >= 0 ? STEPS[idx].label : 'Prêt à démarrer'}</p>
        <p className="text-base font-semibold">
          {idx >= 0 ? STEPS[idx].detail : 'Cliquez sur Démarrer pour lancer le workflow'}
        </p>
        {finished && (
          <p className="mt-2 text-sm text-emerald-400">
            Processus terminé : l’IA a analysé et traité les données puis mis à jour le CRM.
          </p>
        )}
      </motion.div>
    </div>
  );
}

export const WorkflowDemo = memo(WorkflowDemoBase);
