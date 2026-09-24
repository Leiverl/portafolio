"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { useApp } from "@/components/app-provider";
import { projects } from "@/lib/site-config";

const EASE = [0.16, 1, 0.3, 1] as const;

const tileSetup = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const { t, lang } = useApp();
  const reduce = useReducedMotion();

  const tile = (i: number) => ({
    initial: reduce ? undefined : tileSetup.initial,
    animate: tileSetup.animate,
    transition: { duration: 0.7, delay: 0.25 + i * 0.12, ease: EASE },
  });

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-20%] size-[560px] rounded-full bg-accent opacity-[0.07] blur-3xl"
      />
      <div className="mx-auto grid min-h-dvh max-w-6xl items-center gap-14 px-5 pb-20 pt-28 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pt-24">
        <div>
          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl"
          >
            {t.hero.titleStart}
            <br />
            <em className="not-italic text-accent">{t.hero.titleEnd}</em>
          </motion.h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="focus-ring group inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-on-accent transition-transform active:scale-[0.98]"
            >
              {t.hero.primary}
              <ArrowRight
                size={16}
                weight="bold"
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="https://github.com/Leiverl"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-11 items-center gap-2 rounded-lg border border-line px-5 text-sm font-semibold transition-colors hover:bg-surface-raised active:scale-[0.98]"
            >
              {t.hero.secondary}
              <ArrowUpRight size={16} weight="bold" aria-hidden />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3" aria-hidden>
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href="#projects"
              {...tile(i)}
              className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-4"
              style={{ boxShadow: `inset 0 0 0 1px ${project.accent}22` }}
            >
              <span
                className="absolute inset-y-0 left-0 w-1 opacity-70 transition-opacity group-hover:opacity-100"
                style={{ background: project.accent }}
              />
              <span
                className="font-mono text-3xl font-bold"
                style={{ color: project.accent }}
              >
                {project.monogram}
              </span>
              <span className="font-mono text-xs text-muted">
                {project.name}
                <span className="mt-1 block text-foreground">
                  {project.tagline[lang]}
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}