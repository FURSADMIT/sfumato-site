# sfumàto — сайт агентства

Лендинг бутикового агентства эстетичного маркетинга **sfumàto** с моушен-дизайном:
плавный инерционный скролл (Lenis) + scroll-анимации (GSAP ScrollTrigger).

Дизайн — из Figma-макета [Sfumato — Landing](https://www.figma.com/design/bQflGmAfFlCrV1wz7zfpTs/), фрейм `V1 / Desktop`.

## Запуск

```bash
npm install
npm run dev   # http://localhost:3200
```

## Стек

- Next.js 16 (App Router, JavaScript), Tailwind CSS v4
- Lenis (`lenis/react`) — плавный скролл
- GSAP + ScrollTrigger (`@gsap/react`) — анимации при скролле
- Шрифт — NT Somic (variable, локально в `public/fonts`)

## Структура

```
src/
  app/
    layout.js        — корневой layout: шрифт NT Somic + <SmoothScroll>
    page.js          — главная: все секции и контент
    globals.css      — цвета бренда и токены Tailwind
  components/
    SmoothScroll.js  — Lenis + синхронизация с ScrollTrigger (anchors: true)
    Reveal.js        — появление блока при скролле
    Hero.js          — первый экран: фото, вордмарк, параллакс
public/
  fonts/             — NT Somic VF + Bold
  images/            — фото и логотипы, выгруженные из Figma-макета
  logo/              — (резерв под SVG-версии логотипа)
brand/
  brandbook.pdf      — брендбук sfumàto (27 стр.)
  logo-mark.zip      — знак «S» (SVG/PNG, цветовые версии)
  logo-wordmark.zip  — вордмарк sfumàto (SVG/PNG, цветовые версии)
  sources.zip        — исходники (постер + шрифты)
```

## Секции главной (порядок как в макете V1)

Hero → О проекте (`#about`) → Услуги (`#services`) → Миссия (`#mission`) → Сообщество (`#community`) → Подход (`#approach`) → CTA (`#contact`) → Футер.

Якоря скроллятся плавно через Lenis (опция `anchors: true`).

## Меню

Бургер в hero открывает полноэкранное меню (`src/components/Menu.js`): пункты
о проекте / услуги / миссия / портфолио (неактивен) / обсудить проект, контакты и
соцсети. Закрытие: крестик, Esc, клик по пункту (плавный скролл к секции).

## История изменений

- **2026-08-15** — проект создан: скопирован моушен-каркас из `~/Downloads/agency-site`
  (его демо-дизайн выброшен), свёрстана главная по Figma-макету V1, подключены
  реальные шрифты NT Somic и логотипы бренда, ассеты выгружены из Figma в `public/images`.
- **2026-08-15** — добавлен 3D/WebGL-слой: `three` + `@react-three/fiber` + `@react-three/drei`.
- **2026-08-15** — моушен: SplitText-заголовки (построчная сборка из-под маски) на
  ключевых заголовках секций; шейдерный ховер (жидкое искажение + зум + rgb-сдвиг)
  на фото в «О проекте» и «Миссии» (`SplitHeading`, `ShaderImage`).

## Известные заглушки

- «РАБОТА В sfumàto: @…» в футере — контакт не задан в макете.
- «ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ» — страницы пока нет, ссылка неактивна.
- Бургер-меню в hero — визуальный элемент из макета, панель меню не спроектирована.
