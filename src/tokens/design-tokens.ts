// Design tokens — Figma Variables mapped in design-tokens-figma-guide.md

export const tokens = {
  color: {
    brand:   { primary: "#0F3D2E", secondary: "#145A43", soft: "#2E7D63" },
    surface: { page: { light: "#F7FAF8", dark: "#0B0F0E" }, card: { light: "#FFFFFF", dark: "#111916" } },
    text:    { primary: { light: "#0F1F1A", dark: "#E8F2EE" }, muted: { light: "#4A6558", dark: "#7AB09A" } },
    border:  { light: "#C8DDD6", dark: "#1E3028" },
    tag: {
      LLM:               "border border-slate-900/85 !bg-transparent text-slate-950 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-300",
      Clinical:          "border border-emerald-950/80 !bg-transparent text-emerald-950 dark:border-emerald-800/50 dark:bg-emerald-900/30 dark:text-emerald-300",
      "Computer Vision": "border border-violet-950/80 !bg-transparent text-violet-950 dark:border-purple-800/50 dark:bg-purple-900/30 dark:text-purple-300",
      "Data Science":    "border border-amber-950/80 !bg-transparent text-amber-950 dark:border-amber-800/50 dark:bg-amber-900/30 dark:text-amber-300",
      Sports:            "border border-orange-950/80 !bg-transparent text-orange-950 dark:border-orange-800/50 dark:bg-orange-900/30 dark:text-orange-300",
      Service:           "border border-teal-950/80 !bg-transparent text-teal-950 dark:border-teal-800/50 dark:bg-teal-900/30 dark:text-teal-300",
      "UI/UX":           "border border-pink-950/80 !bg-transparent text-pink-950 dark:border-pink-800/50 dark:bg-pink-900/30 dark:text-pink-300",
      "PM/Product":      "border border-indigo-950/80 !bg-transparent text-indigo-950 dark:border-violet-800/50 dark:bg-violet-900/30 dark:text-violet-300",
      Security:          "border border-rose-950/80 !bg-transparent text-rose-950 dark:border-red-800/50 dark:bg-red-900/30 dark:text-red-300",
    },
    cardType: {
      Experience: "border border-slate-950/80 !bg-transparent text-slate-950 dark:border-blue-800/50 dark:bg-blue-900/20 dark:text-blue-300",
      Project:    "border border-teal-950/80 !bg-transparent text-teal-950 dark:border-teal-800/50 dark:bg-teal-900/20 dark:text-teal-300",
      Leadership: "border border-violet-950/80 !bg-transparent text-violet-950 dark:border-violet-800/50 dark:bg-violet-900/20 dark:text-violet-300",
      Award:      "border border-amber-950/80 !bg-transparent text-amber-950 dark:border-amber-800/50 dark:bg-amber-900/20 dark:text-amber-300",
    },
  },
  typography: {
    fontFamily: { sans: "var(--font-geist-sans)", mono: "var(--font-geist-mono)" },
    scale: { xs:"0.75rem", sm:"0.875rem", base:"1rem", lg:"1.125rem", xl:"1.25rem", "2xl":"1.5rem", "3xl":"1.875rem", "4xl":"2.25rem", "5xl":"3rem" },
  },
  spacing: { section: "py-24", container: "max-w-5xl mx-auto px-8" },
  radius:  { sm:"4px", md:"8px", lg:"12px", xl:"16px", "2xl":"24px", full:"9999px" },
  shadow:  { sm:"0 1px 3px rgb(0 0 0/.06)", md:"0 4px 10px rgb(0 0 0/.08)", lg:"0 10px 24px rgb(0 0 0/.10)" },
} as const;

export type TagLabel  = keyof typeof tokens.color.tag;
export type CardType  = keyof typeof tokens.color.cardType;

export const ALL_TAGS: TagLabel[] = [
  "LLM", "Clinical", "Computer Vision", "Data Science",
  "Sports", "Service", "UI/UX", "PM/Product", "Security",
];
