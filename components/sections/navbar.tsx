"use client";

import Link from "next/link";
import { Moon, Sun } from "@phosphor-icons/react";
import { useApp } from "@/components/app-provider";

export function Navbar() {
  const { t, lang, setLang, theme, setTheme } = useApp();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16 md:px-8">
        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-md bg-accent font-mono text-sm font-bold text-on-accent">
            L
          </span>
          <span className="text-sm font-semibold tracking-tight">Leiver</span>
        </div>

        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          {(
            [
              { href: "#about", label: t.nav.about },
              { href: "#projects", label: t.nav.projects },
              { href: "#skills", label: t.nav.skills },
              { href: "#contact", label: t.nav.contact },
            ] as const
          ).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground focus-ring rounded-sm"
            >
              {item.label}
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