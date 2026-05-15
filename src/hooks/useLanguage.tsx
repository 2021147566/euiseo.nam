"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ko, Messages } from "@/messages/ko";
import { en } from "@/messages/en";

export type Lang = "ko" | "en";

const msgs: Record<Lang, Messages> = { ko, en };

interface LangCtx {
  lang: Lang;
  t: Messages;
  toggle: () => void;
}

const LanguageContext = createContext<LangCtx>({ lang: "ko", t: ko, toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "ko" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  function toggle() {
    const next: Lang = lang === "ko" ? "en" : "ko";
    setLang(next);
    try { localStorage.setItem("lang", next); } catch {}
  }

  // Use "ko" during SSR to avoid hydration mismatch; real lang after mount
  const activeLang: Lang = mounted ? lang : "ko";

  return (
    <LanguageContext.Provider value={{ lang: activeLang, t: msgs[activeLang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
