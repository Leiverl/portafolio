export type Lang = "es" | "en";
export type Theme = "dark" | "light";

const listeners = new Set<() => void>();
let langCache: Lang | null = null;
let themeCache: Theme | null = null;
let themeInitialized = false;

function readLang(): Lang {
  if (typeof window === "undefined") return "es";
  try {
    const stored = window.localStorage.getItem("lang");
    if (stored === "es" || stored === "en") return stored;
    return (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
  } catch {
    return "es";
  }
}

function readTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return "light";
  } catch {
    return "light";
  }
}

function applyThemeClass(theme: Theme) {
  const html = document.documentElement;
  html.classList.toggle("dark", theme === "dark");
  html.style.colorScheme = theme;
}

export function getLang(): Lang {
  if (!langCache) langCache = readLang();
  return langCache;
}

export function getTheme(): Theme {
  if (!themeCache) themeCache = readTheme();
  return themeCache;
}

function emit() {
  for (const listener of listeners) listener();
}

export function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function setLang(next: Lang) {
  langCache = next;
  try {
    window.localStorage.setItem("lang", next);
  } catch {
    /* storage unavailable */
  }
  document.documentElement.lang = next === "es" ? "es" : "en";
  emit();
}

export function setTheme(next: Theme) {
  themeCache = next;
  try {
    window.localStorage.setItem("theme", next);
  } catch {
    /* storage unavailable */
  }
  if (typeof window !== "undefined") {
    if (!themeInitialized) {
      applyThemeClass(getTheme());
      themeInitialized = true;
    }
    applyThemeClass(next);
  }
  emit();
}

export function getLangServerSnapshot(): Lang {
  return "es";
}

export function getThemeServerSnapshot(): Theme {
  return "light";
}