'use client';
import { useMemo, useState } from 'react';
import { WhatsAppDemo } from './Demos/WhatsAppDemo';
import { WorkflowDemo } from './Demos/WorkflowDemo';
import { CrmDemo } from './Demos/CrmDemo';

export default function Demo() {
  const demos = useMemo(() => ([
    {
      key: 'crm',
      label: 'Mini CRM/Dashboard',
      description:
        'Dashboards et CRM sur‑mesure pour centraliser, automatiser et suivre vos données — avec agents IA intégrés.',
      component: CrmDemo,
    },
    {
      key: 'workflow',
      label: 'Workflow Automatisation',
      description: 'Automatisation: analyse, routage et mise à jour CRM — aperçu guidé.',
      component: WorkflowDemo,
    },
    {
      key: 'whatsapp',
      label: 'Bot WhatsApp',
      description:
        'Préqualification humaine + prise de RDV fluide (simulation guidée).',
      component: WhatsAppDemo,
    },
  ]), []);

  const [active, setActive] = useState(demos[0].key);
  const ActiveComponent = useMemo(
    () => demos.find((d) => d.key === active)?.component || (() => null),
    [active, demos]
  );

  return (
    <section id="Demo" className="py-20 px-4 bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-center">AetherIA en action</h1>
        <p className="text-center mb-8 opacity-80">
          Découvrez nos démos : dashboard, workflow et préqualification WhatsApp.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
          role="tablist"
          aria-label="Types de démos"
        >
          {demos.map((d, i) => (
            <button
              key={d.key}
              role="tab"
              aria-selected={active === d.key}
              aria-controls={`panel-${d.key}`}
              id={`tab-${d.key}`}
              tabIndex={active === d.key ? 0 : -1}
              onClick={() => setActive(d.key)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') {
                  const next = (i + 1) % demos.length;
                  setActive(demos[next].key);
                  document.getElementById(`tab-${demos[next].key}`)?.focus();
                  e.preventDefault();
                } else if (e.key === 'ArrowLeft') {
                  const prev = (i - 1 + demos.length) % demos.length;
                  setActive(demos[prev].key);
                  document.getElementById(`tab-${demos[prev].key}`)?.focus();
                  e.preventDefault();
                } else if (e.key === 'Home') {
                  setActive(demos[0].key);
                  document.getElementById(`tab-${demos[0].key}`)?.focus();
                  e.preventDefault();
                } else if (e.key === 'End') {
                  setActive(demos[demos.length - 1].key);
                  document.getElementById(`tab-${demos[demos.length - 1].key}`)?.focus();
                  e.preventDefault();
                }
              }}
              className={`px-4 py-2 rounded-full border text-sm transition-colors 
                hover:bg-[var(--color-text)]/10 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text)]/60 
                focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]
                ${active === d.key ? 'bg-[var(--color-text)] text-[var(--color-bg)] border-transparent' : 'bg-transparent'}`}
            >
              {d.label}
            </button>
          ))}
        </div>

        <p className="text-center text-sm mb-6 opacity-80">
          {demos.find((d) => d.key === active)?.description}
        </p>

        <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`}>
          <ActiveComponent />
        </div>
      </div>
    </section>
  );
}
