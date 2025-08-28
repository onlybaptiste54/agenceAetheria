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
        "Dashboards et CRM sur‑mesure pour centraliser, automatiser et suivre vos données — avec agents IA intégrés.",
      component: CrmDemo,
    },
    {
      key: 'workflow',
      label: 'Workflow Automatisation',
      description:'',
      component: WorkflowDemo,
    },
    {
      key: 'whatsapp',
      label: 'Bot WhatsApp',
      description:
        "Préqualification humaine + prise de RDV fluide (simulation guidée).",
      component: WhatsAppDemo,
    },
  ]), []);

  const [active, setActive] = useState(demos[0].key);
  const ActiveComponent = useMemo(() => demos.find((d) => d.key === active)?.component || (() => null), [active, demos]);

  return (
    <section id="Demo" className="py-20 px-4 bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-center">AetherIA en action</h1>
        <p className="text-center mb-8 opacity-80">Découvrez nos démos: dashboard, workflow et préqualification WhatsApp.</p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-6" role="tablist" aria-label="Types de démos">
          {demos.map((d) => (
            <button
              key={d.key}
              role="tab"
              aria-selected={active === d.key}
              aria-controls={`panel-${d.key}`}
              id={`tab-${d.key}`}
              onClick={() => setActive(d.key)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                active === d.key ? 'bg-[var(--color-text)] text-[var(--color-bg)]' : 'bg-transparent'
              }`}
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
