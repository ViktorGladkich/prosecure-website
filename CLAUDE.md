# ProSecure GmbH — инструкции для Claude Code

## О проекте
Премиум сайт для немецкой охранной компании ProSecure GmbH в Дрездене.
Язык сайта: немецкий. Стиль: Dark Luxury Security.

## Цвета
- Чёрный фон: #0A0A0F
- Золото (акцент): #C9A84C
- Белый текст: #F5F5F0
- Тёмно-синий: #0D1B2A
- Тёмно-серый: #1C1C24

## Шрифты (Fontshare CDN — добавить в <head> layout.tsx)
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400&f[]=satoshi@300,301,400,401&f[]=jet-brains-mono@100,101,200,201,300,301,400,401,500&display=swap" rel="stylesheet">>
- Заголовки: 'Clash Display', sans-serif
- Текст: 'Satoshi', sans-serif
- Монospace/теги: 'JetBrains Mono', sans-serif

## Стек
- Next.js 15 (App Router) + TypeScript + Tailwind CSS v4
- GSAP + ScrollTrigger — все scroll анимации
- Lenis — плавный скролл (синхронизировать с ScrollTrigger)
- Three.js + React Three Fiber — 3D частицы в Hero
- SplitType — анимация текста по буквам/словам
- Framer Motion — hover эффекты на компонентах
- react-hook-form + zod — контактная форма

## Анимации — строго следовать этим паттернам
1. Preloader: счётчик 0→100 с Mix-Blend-Mode, SplitType текст, exit вверх
2. Hero: Three.js золотые частицы + GSAP parallax + SplitType reveal заголовка
3. Навигация: Halftone blur эффект (radial-gradient + backdrop-filter)
4. Секции: GSAP Observer — секции въезжают при скролле
5. Отзывы: Vertical Zoom Slideshow с GSAP
6. Футер: clip-path reveal при скролле + video background

## Правила кода
- 'use client' на всех компонентах где используется GSAP или Framer Motion
- GSAP инициализировать только если typeof window !== 'undefined'
- Все анимации только через transform и opacity (GPU-ускорение)
- Mobile-First подход в Tailwind классах
- TypeScript strict mode — никаких any
- Никаких console.log в продакшн коде
- Все тексты на немецком языке (профессиональный тон)

## Услуги компании
1. Objektschutz — охрана объектов
2. Veranstaltungsschutz — охрана мероприятий
3. Personenschutz — личная охрана
4. Alarmaufschaltung — подключение сигнализации

## Структура компонентов
src/components/layout/    → Navigation, Footer, Preloader
src/components/sections/  → Hero, Services, Stats, Process, About, Testimonials, Contact
src/components/ui/        → Button, ServiceCard, AnimatedText, MagneticButton
src/components/three/     → ParticleField
src/hooks/                → useLenis, useGSAP, useScrollProgress
src/lib/                  → animations.ts, seo.ts, schema.ts
src/styles/               → globals.css, tokens.css

## SEO
- Ключевые слова: Sicherheitsdienst Dresden, Objektschutz Dresden,
  Personenschutz Dresden, Veranstaltungsschutz Dresden
- Schema.org тип: LocalBusiness
- Язык страницы: de_DE
- Canonical: https://prosecure-dresden.de

## После каждого этапа
Делай скриншот через Puppeteer MCP и проверяй результат.