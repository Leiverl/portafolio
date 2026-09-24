"use client";

import Image from "next/image";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { useApp } from "@/components/app-provider";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/site-config";
import type { Project } from "@/lib/site-config";

function StackChips({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {stack.map((tech) => (
        <li
          key={tech}
          className="rounded-md bg-surface-raised px-2 py-1 font-mono text-[11px] text-muted"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function CardLinks({ project }: { project: Project }) {
  const { t } = useApp();
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring group inline-flex h-9 items-center gap-1.5 rounded-md bg-accent px-3.5 text-xs font-semibold text-on-accent active:scale-[0.98]"
        >
          {t.projects.demo}
          <ArrowUpRight
            size={13}
            weight="bold"
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      ) : null}
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring inline-flex h-9 items-center gap-1.5 rounded-md border border-line px-3.5 text-xs font-semibold transition-colors hover:bg-surface-raised active:scale-[0.98]"
      >
        <GithubLogo size={14} weight="bold" aria-hidden />
        {t.projects.source}
      </a>
    </div>
  );
}

function FlagshipBadge() {
  const { t } = useApp();
  return (
    <span className="absolute right-4 top-4 rounded-full border border-line bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground backdrop-blur">
      ★ {t.projects.flagship}
    </span>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const { t, lang } = useApp();
  return (
    <Reveal className="lg:col-span-2">
      <article className="grid overflow-hidden rounded-xl border border-line bg-surface lg:grid-cols-2">
        <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[320px]">
          <Image
            src={project.img}
            alt={`${project.name} cover`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${project.accent}00 30%, ${project.accent}66 100%)`,
            }}
          />
          <span
            className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-lg font-mono text-lg font-bold text-on-accent"
            style={{ background: project.accent }}
          >
            {project.monogram}
          </span>
          {project.featured ? <FlagshipBadge /> : null}
        </div>
        <div className="flex flex-col justify-between gap-5 p-6 md:p-8">
          <div>
            <p className="font-mono text-xs text-muted">
              {String(index).padStart(2, "0")} / {t.projects.index}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              {project.name}
            </h3>
            <p className="mt-1 text-sm font-medium" style={{ color: project.accent }}>
              {project.tagline[lang]}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description[lang]}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <StackChips stack={project.stack} />
            <div className="flex flex-wrap items-end justify-between gap-3">
              <CardLinks project={project} />
              <span className="font-mono text-[11px] text-muted">{project.fact}</span>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function StandardCard({ project, index }: { project: Project; index: number }) {
  const { t, lang } = useApp();
  return (
    <Reveal className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface">
        <div className="relative aspect-[16/9]">
          <Image
            src={project.img}
            alt={`${project.name} cover`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${project.accent}00 30%, ${project.accent}66 100%)`,
            }}
          />
          <span
            className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-lg font-mono text-base font-bold text-on-accent"
            style={{ background: project.accent }}
          >
            {project.monogram}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <p className="font-mono text-xs text-muted">
              {String(index).padStart(2, "0")} / {t.projects.index}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-1 text-sm font-medium" style={{ color: project.accent }}>
              {project.tagline[lang]}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description[lang]}
            </p>
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <StackChips stack={project.stack} />
            <div className="flex flex-wrap items-end justify-between gap-3">
              <CardLinks project={project} />
              <span className="font-mono text-[11px] text-muted">{project.fact}</span>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const { t } = useApp();

  return (
    <section
      id="projects"
      className="cv-auto mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32"
    >
      <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.projects.heading}
        </h2>
        <p className="max-w-xs text-sm text-muted">{t.projects.intro}</p>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {projects.map((project, i) => {
          const index = i + 1;
          return project.featured || project.id === "petcare" ? (
            <FeaturedCard key={project.id} project={project} index={index} />
          ) : (
            <StandardCard key={project.id} project={project} index={index} />
          );
        })}
      </div>
    </section>
  );
}