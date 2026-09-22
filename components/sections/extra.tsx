"use client";

import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { useApp } from "@/components/app-provider";
import { Reveal } from "@/components/ui/reveal";
import { extraProjects } from "@/lib/site-config";

export function Extra() {
  const { t, lang } = useApp();

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
      <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.extra.heading}
        </h2>
        <p className="max-w-xs text-sm text-muted">{t.extra.intro}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {extraProjects.map((project) => (
            <li key={project.repo}>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group flex items-center justify-between gap-4 py-5"
              >
                <div>
                  <p className="font-medium">{project.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {project.note[lang]}
                  </p>
                </div>
                <span className="flex items-center gap-2 font-mono text-xs text-muted transition-colors group-hover:text-accent">
                  {t.extra.source}
                  <ArrowUpRight
                    size={15}
                    weight="bold"
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Leiverl?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group flex items-center justify-between gap-4 py-5"
            >
              <div>
                <p className="font-medium">github.com/Leiverl</p>
                <p className="mt-0.5 font-mono text-xs text-muted">
                  10 {lang === "es" ? "repos públicos" : "public repos"}
                </p>
              </div>
              <span className="flex items-center gap-2 font-mono text-xs text-muted transition-colors group-hover:text-accent">
                <GithubLogo size={16} weight="bold" aria-hidden />
              </span>
            </a>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}