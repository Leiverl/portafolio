"use client";

import { MapPin } from "@phosphor-icons/react";
import { useApp } from "@/components/app-provider";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  const { t } = useApp();

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="font-mono text-sm text-accent">{t.about.tag}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.about.heading}
            </h2>
            <p className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted">
              <MapPin size={14} weight="bold" aria-hidden />
              {t.about.location}
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-muted">{t.about.body1}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">{t.about.body2}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-2 flex flex-col gap-3">
              {t.about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}