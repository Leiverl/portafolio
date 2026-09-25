"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { translations } from "@/lib/translations";
import type { Lang, Translation } from "@/lib/translations";
import {
  getLang,
  getTheme,
  getLangServerSnapshot,
  getThemeServerSnapshot,
  setLang as storeSetLang,
  setTheme as storeSetTheme,
  subscribe,
} from "@/lib/store";
import type { Theme } from "@/lib/store";

type AppContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getLang, getLangServerSnapshot);
  const theme = useSyncExternalStore(subscribe, getTheme, getThemeServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang === "es" ? "es" : "en";
  }, [lang]);

  const value = useMemo<AppContextValue>(
    () => ({
      lang,
      theme,
      setLang: storeSetLang,
      setTheme: storeSetTheme,
      t: translations[lang],
    }),
    [lang, theme],
  );

  return (
    <AppContext.Provider value={value}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}