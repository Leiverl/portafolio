import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProvider } from "@/components/app-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://portafolio-leiver.vercel.app",
  ),
  title: {
    default: "Leiver — Full-stack developer",
    template: "%s — Leiver",
  },
  description:
    "Full-stack developer from Ecuador building web and mobile platforms on TypeScript, Node and PostgreSQL.",
  keywords: [
    "full-stack developer",
    "NestJS",
    "Next.js",
    "React",
    "PostgreSQL",
    "Ecuador",
  ],
  openGraph: {
    title: "Leiver — Full-stack developer",
    description:
      "Full-stack developer from Ecuador building web and mobile platforms on TypeScript, Node and PostgreSQL.",
    type: "website",
    locale: "es_EC",
    siteName: "Leiver",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leiver — Full-stack developer",
    description:
      "Full-stack developer from Ecuador building web and mobile platforms on TypeScript, Node and PostgreSQL.",
  },
};

const themeScript = `
try {
  var stored = localStorage.getItem("theme");
  var theme = stored === "dark" || stored === "light"
    ? stored
    : (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  var html = document.documentElement;
  html.classList.toggle("dark", theme === "dark");
  html.style.colorScheme = theme;
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <a id="top" className="sr-only" />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}