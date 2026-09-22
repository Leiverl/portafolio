"use client";

import { useApp } from "@/components/app-provider";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/lib/site-config";

export function Skills() {
  const { t } = useApp();

  return (
    <section
      id="skills"
      className="border-y border-line bg-surface mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32"
    >
      <Reveal className="max-w-md">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.skills.heading}
        </h2>
        <p className="mt-3 text-sm text-muted">{t.skills.intro}</p>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={i * 0.05}>
            <div className="flex h-full flex-col gap-3 rounded-xl border border-line bg-background p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {t.skills.groups[group.id]}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-1.5 rounded-md bg-surface-raised px-2.5 py-1.5 font-mono text-xs"
                  >
                    <span aria-hidden className="size-1 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}