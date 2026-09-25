"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { useApp } from "@/components/app-provider";
import { PlotSheet } from "@/components/ui/plot-sheet";

const EASE = [0.16, 1, 0.3, 1] as const;

const fade = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const { t } = useApp();
  const reduce = useReducedMotion();

  const motionProps = (delay: number) => ({
    initial: reduce ? undefined : fade.initial,
    animate: fade.animate,
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-20rem] h-[34rem] w-[46rem] -translate-x-1/2 rounded-[50%] bg-accent opacity-[0.06] blur-3xl"
      />
      <div className="mx-auto grid min-h-dvh max-w-6xl items-center gap-14 px-5 pb-24 pt-32 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-28">
        <div>
          <motion.p
            {...motionProps(0)}
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            {...motionProps(0.08)}
            className="mt-6 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {t.hero.titleStart}
            <br />
            <span className="text-accent">{t.hero.titleEnd}</span>
          </motion.h1>

          <motion.p
            {...motionProps(0.16)}
            className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            {...motionProps(0.24)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="focus-ring group inline-flex h-11 items-center gap-2 rounded-[4px] bg-accent px-5 text-sm font-semibold text-on-accent transition-transform active:scale-[0.98]"
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
              className="focus-ring inline-flex h-11 items-center gap-2 rounded-[4px] border border-line px-5 text-sm font-semibold transition-colors hover:bg-surface-raised active:scale-[0.98]"
            >
              {t.hero.secondary}
              <ArrowUpRight size={16} weight="bold" aria-hidden />
            </a>
          </motion.div>
        </div>

        <motion.div {...motionProps(0.2)}>
          <PlotSheet />
        </motion.div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3 md:px-8">
          <span aria-hidden className="text-accent">◮</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            {t.plot.coord}
          </span>
          <span aria-hidden className="h-px flex-1 bg-line" />
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted sm:inline">
            LÍNEA LVR·01
          </span>
        </div>
      </div>
    </section>
  );
}