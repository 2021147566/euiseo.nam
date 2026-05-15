# Design Tokens — Figma Variables 매핑 가이드

Source: `src/tokens/design-tokens.ts`

---

## Color

| Token Key | Light Value | Dark Value | Figma Variable Name |
|-----------|-------------|------------|---------------------|
| `--background` | `#f9fafb` | `#0d1117` | `surface/page` |
| `--card` | `#ffffff` | `#161b22` | `surface/card` |
| `--muted` | `#f3f4f6` | `#21262d` | `surface/subtle` |
| `--foreground` | `#111827` | `#e6edf3` | `text/primary` |
| `--muted-foreground` | `#6b7280` | `#8b949e` | `text/secondary` |
| `--border` | `#e5e7eb` | `#30363d` | `border/default` |
| `--brand` | `#1e40af` | `#3b82f6` | `brand/default` |
| `--brand-light` | `#3b82f6` | `#60a5fa` | `brand/light` |

### Tag Colors (고정, 다크 무관)
| Tag | Background | Text | Figma Variable |
|-----|-----------|------|----------------|
| LLM | `blue-100` | `blue-800` | `tag/llm` |
| Clinical | `emerald-100` | `emerald-800` | `tag/clinical` |
| Computer Vision | `purple-100` | `purple-800` | `tag/cv` |
| Data Science | `amber-100` | `amber-800` | `tag/data` |
| Sports | `orange-100` | `orange-800` | `tag/sports` |
| Service | `teal-100` | `teal-800` | `tag/service` |
| UI/UX | `pink-100` | `pink-800` | `tag/uiux` |
| PM/Product | `violet-100` | `violet-800` | `tag/pm` |

---

## Typography

| Token | Value | Figma Text Style |
|-------|-------|-----------------|
| Font Family (Sans) | `Geist Sans` → `--font-geist-sans` | `font/sans` |
| Font Family (Mono) | `Geist Mono` → `--font-geist-mono` | `font/mono` |
| Scale xs | `0.75rem / 12px` | `text/xs` |
| Scale sm | `0.875rem / 14px` | `text/sm` |
| Scale base | `1rem / 16px` | `text/base` |
| Scale lg | `1.125rem / 18px` | `text/lg` |
| Scale xl | `1.25rem / 20px` | `text/xl` |
| Scale 2xl | `1.5rem / 24px` | `text/2xl` |
| Scale 3xl | `1.875rem / 30px` | `text/3xl` |
| Scale 4xl | `2.25rem / 36px` | `text/4xl` |
| Scale 5xl | `3rem / 48px` | `text/5xl` |

---

## Spacing

| Token | Tailwind Class | Figma Variable |
|-------|---------------|----------------|
| Section padding | `py-24` (96px) | `spacing/section` |
| Container | `max-w-5xl px-8` | `spacing/container` |
| Card gap | `gap-6` (24px) | `spacing/card-gap` |

---

## Border Radius

| Token | Value | Figma Variable |
|-------|-------|----------------|
| sm | `4px` | `radius/sm` |
| md | `8px` | `radius/md` |
| lg | `12px` | `radius/lg` |
| xl | `16px` | `radius/xl` |
| 2xl | `24px` | `radius/2xl` |
| full | `9999px` | `radius/full` |

---

## Shadow

| Token | CSS Value | Figma Effect |
|-------|-----------|--------------|
| sm | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | `shadow/sm` |
| md | `0 4px 6px -1px rgb(0 0 0 / 0.07)` | `shadow/md` |
| lg | `0 10px 15px -3px rgb(0 0 0 / 0.07)` | `shadow/lg` |

---

## Figma Variables 연결 방법

1. **Figma Variables 패널** → `+` → Collection 이름: `Portfolio Tokens`
2. Mode를 `Light` / `Dark` 두 개로 설정
3. 위 Color 표의 각 행을 Variable로 추가, Mode별로 값 입력
4. 컴포넌트의 Fill/Stroke에 Variable 바인딩
5. Typography의 경우 Text Styles로 등록 후 Figma의 `Variable Font` 기능으로 연결
6. `src/tokens/design-tokens.ts` 수정 시 이 가이드도 함께 업데이트

---

*Generated for Nam Euiseo Portfolio — 2026*
