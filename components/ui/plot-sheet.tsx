"use client";

import { useApp } from "@/components/app-provider";
import { projects } from "@/lib/site-config";

const POINTS = [
  { x: 56, y: 44 },
  { x: 200, y: 36 },
  { x: 252, y: 132 },
  { x: 96, y: 142 },
];

const POLYGON = `${POINTS.map((p) => `${p.x},${p.y}`).join(" ")} ${POINTS[0].x},${POINTS[0].y}`;

export function PlotSheet() {
  const { t, lang } = useApp();

  return (
    <div className="relative rounded-[4px] border border-line bg-surface p-5">
      <CornerTicks />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            {t.plot.heading}
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            LEIVER · {t.plot.provenance}
          </p>
        </div>
        <p className="font-mono text-[10px] text-muted">{t.plot.coord}</p>
      </div>

      <div className="mt-4 border border-line">
        <svg viewBox="0 0 320 180" className="block h-auto w-full" role="img" aria-label={t.plot.heading}>
          <g style={{ stroke: "var(--line)" }} strokeWidth="1">
            {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((x) => (
              <line key={`v${x}`} x1={x} y1={0} x2={x} y2={180} />
            ))}
            {[0, 30, 60, 90, 120, 150, 180].map((y) => (
              <line key={`h${y}`} x1={0} y1={y} x2={320} y2={y} />
            ))}
          </g>
          <polygon
            points={POLYGON}
            fill="none"
            style={{ stroke: "var(--accent)" }}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {POINTS.map((p, i) => (
            <g key={`p${i}`}>
              <circle cx={p.x} cy={p.y} r="5" style={{ fill: "var(--background)" }} stroke={projects[i].accent} strokeWidth="2" />
              <text
                x={p.x + 9}
                y={p.y + 4}
                fontSize="9"
                style={{ fontFamily: "var(--font-mono)", fill: "var(--muted)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          ))}
          <g transform={`translate(300 158)`}>
            <polygon points="0,-12 6,4 -6,4" style={{ fill: "var(--accent)" }} />
            <text
              x="0"
              y="-16"
              fontSize="8"
              textAnchor="middle"
              style={{ fontFamily: "var(--font-mono)", fill: "var(--muted)" }}
            >
              N
            </text>
          </g>
        </svg>
      </div>

      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
        {t.plot.legend}
      </p>
      <ol className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.id} className="flex items-center gap-2 font-mono text-[11px]">
            <span aria-hidden className="h-2 w-2 shrink-0 rounded-full" style={{ background: project.accent }} />
            <span className="text-muted">LVR-0{i + 1}</span>
            <span className="truncate text-foreground">{project.name}</span>
          </li>
        ))}
      </ol>

      <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
          {t.plot.note}
        </span>
        <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
          <polygon points="8,0 16,16 0,16" fill="var(--accent)" />
        </svg>
      </div>
      <span className="sr-only">{lang}</span>
    </div>
  );
}

function CornerTicks() {
  const cls = "pointer-events-none absolute size-3 border-accent";
  return (
    <>
      <span aria-hidden className={`${cls} left-0 top-0 border-l border-t`} />
      <span aria-hidden className={`${cls} right-0 top-0 border-r border-t`} />
      <span aria-hidden className={`${cls} bottom-0 left-0 border-b border-l`} />
      <span aria-hidden className={`${cls} bottom-0 right-0 border-b border-r`} />
    </>
  );
}