"use client";

import { ArrowUp } from "@phosphor-icons/react";
import { useApp } from "@/components/app-provider";

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 md:px-8">
      <p className="flex items-center gap-2 font-mono text-xs text-muted">
        <span aria-hidden className="inline-block h-4 w-px bg-accent" />
        © {new Date().getFullYear()} Leiver · {t.footer.madeIn}
      </p>
      <a
        href="#top"
        className="focus-ring inline-flex items-center gap-1.5 rounded-md font-mono text-xs text-muted transition-colors hover:text-foreground"
      >
        <ArrowUp size={13} weight="bold" aria-hidden />
        {t.footer.backToTop}
      </a>
    </footer>
  );
}