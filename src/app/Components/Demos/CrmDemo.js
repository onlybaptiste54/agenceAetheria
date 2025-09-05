'use client';
import { memo, useMemo } from 'react';

function CrmDemoBase() {
  const kpis = [
    { label: 'Clients actifs', value: 28, sub: '+4 ce mois' },
    { label: 'Projets en cours', value: 12, sub: '3 en phase finale' },
    { label: 'CA devis (30j)', value: '42 300€', sub: '+18% vs N-1' },
  ];

  const chartPoints = useMemo(() => [5, 8, 6, 10, 12, 11, 14, 13, 17, 15, 19, 21], []);

  // Build smooth SVG path (bezier smoothing)
  const width = 820;
  const height = 180;
  const padding = 8;
  const max = Math.max(...chartPoints);
  const min = Math.min(...chartPoints);
  const normY = (v) => height - ((v - min) / (max - min)) * (height - padding * 2) - padding;
  const step = (width - padding * 2) / (chartPoints.length - 1);
  const pts = chartPoints.map((v, i) => ({ x: padding + i * step, y: normY(v) }));
  const path = pts
    .map((p, i, a) => {
      if (i === 0) return `M ${p.x},${p.y}`;
      const prev = a[i - 1];
      const next = a[i + 1] || p;
      const cx1 = prev.x + (p.x - prev.x) * 0.4;
      const cy1 = prev.y + (p.y - prev.y) * 0.4;
      const cx2 = p.x - (next.x - prev.x) * 0.4 * 0.5;
      const cy2 = p.y - (next.y - prev.y) * 0.4 * 0.5;
      return `C ${cx1},${cy1} ${cx2},${cy2} ${p.x},${p.y}`;
    })
    .join(' ');

  return (
    <div
      className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--form-bg)] p-6 md:p-8 overflow-hidden"
      role="region"
      aria-label="Dashboard CRM – Maquette"
    >
      {/* Background gradient tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      {/* Header */}
      <div className="relative mb-6 flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-semibold">AetherIA CRM</h3>
          <p className="text-sm opacity-70">Vue synthétique : clients, projets, devis</p>
        </div>
        <span className="text-xs px-3 py-1 rounded-full border bg-white/5 backdrop-blur-sm">Demo</span>
      </div>

      {/* KPI + Chart */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KPI tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl border bg-white/5 backdrop-blur-md p-5 flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wide opacity-80">{k.label}</span>
              <span className="text-3xl font-bold">{k.value}</span>
              <span className="text-xs opacity-70">{k.sub}</span>
            </div>
          ))}
        </div>

        {/* Chart card spanning 2 cols on large */}
        <div className="lg:col-span-2 rounded-xl border bg-white/5 backdrop-blur-md p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm opacity-80">Devis signés (12 derniers points)</p>
            <span className="text-xs opacity-70">Aperçu</span>
          </div>
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-48">
            <defs>
              <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgb(34,211,238)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="rgb(34,211,238)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="stroke" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgb(34,211,238)" />
                <stop offset="100%" stopColor="rgb(59,130,246)" />
              </linearGradient>
              <clipPath id="clip">
                <rect x="0" y="0" width={width} height={height} rx="8" />
              </clipPath>
            </defs>
            {/* Grid */}
            <g opacity="0.25" stroke="currentColor">
              {Array.from({ length: 4 }).map((_, i) => {
                const y = (height / 4) * (i + 1);
                return <line key={i} x1="0" y1={y} x2={width} y2={y} strokeWidth="1" />;
              })}
            </g>
            {/* Area + line with draw animation */}
            <path
              d={`${path} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`}
              fill="url(#area)"
              clipPath="url(#clip)"
            />
            <path
              d={path}
              fill="none"
              stroke="url(#stroke)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ strokeDasharray: 2000, strokeDashoffset: 0, animation: 'draw 1.2s ease-out 1' }}
            />
          </svg>
          <style jsx>{`
            @keyframes draw {
              from { stroke-dashoffset: 2000; }
              to { stroke-dashoffset: 0; }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}

export const CrmDemo = memo(CrmDemoBase);
