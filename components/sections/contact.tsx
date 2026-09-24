"use client";

import { ArrowUpRight, EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useApp } from "@/components/app-provider";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  const { t } = useApp();

  return (
    <section
      id="contact"
      className="cv-auto border-y border-line bg-surface mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32"
    >
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.contact.heading}
        </h2>
        <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
          {t.contact.intro}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="focus-ring group inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-on-accent active:scale-[0.98]"
          >
            <EnvelopeSimple size={17} weight="bold" aria-hidden />
            {t.contact.email}
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex h-12 items-center gap-2 rounded-lg border border-line px-5 text-sm font-semibold transition-colors hover:bg-background active:scale-[0.98]"
          >
            <GithubLogo size={17} weight="bold" aria-hidden />
            {t.contact.github}
            <ArrowUpRight size={14} weight="bold" aria-hidden />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex h-12 items-center gap-2 rounded-lg border border-line px-5 text-sm font-semibold transition-colors hover:bg-background active:scale-[0.98]"
          >
            <LinkedinLogo size={17} weight="bold" aria-hidden />
            {t.contact.linkedin}
            <ArrowUpRight size={14} weight="bold" aria-hidden />
          </a>
        </div>
      </Reveal>
    </section>
  );
}