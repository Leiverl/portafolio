"use client";

import Link from "next/link";
import { Moon, Sun } from "@phosphor-icons/react";
import { useApp } from "@/components/app-provider";

const NAV_KEYS = ["about", "projects", "skills", "contact"] as const;

export function Navbar() {
  const { t, lang, setLang, theme, setTheme } = useApp();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16 md:px-8">
        <div className="relative flex items-center gap-3">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-0.5 -top-0.5 size-2 border-l-2 border-t-2 border-accent"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-0.5 -right-0.5 size-2 border-b-2 border-r-2 border-accent"
          />
          <span
            className="flex size-8 items-center justify-center rounded-[3px] border border-accent bg-accent/15 font-mono text-sm font-bold text-accent"
          >
            L
          </span>
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Leiver
          </span>
        </div>

        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              href={`#${key}`}
              className="font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:text-accent focus-ring rounded-sm"
            >
              {t.nav[key]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label={t.common.langLabel}
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="flex h-8 items-center gap-1 rounded-md px-2 font-mono text-xs font-semibold transition-colors hover:bg-surface-raised focus-ring"
          >
            <span className={lang === "es" ? "text-accent" : "text-muted"}>ES</span>
            <span className="text-line">/</span>
            <span className={lang === "en" ? "text-accent" : "text-muted"}>EN</span>
          </button>
          <button
            type="button"
            aria-label={theme === "dark" ? t.common.themeLight : t.common.themeDark}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-surface-raised focus-ring"
          >
            {theme === "dark" ? (
              <Sun size={16} weight="bold" aria-hidden />
            ) : (
              <Moon size={16} weight="bold" aria-hidden />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}