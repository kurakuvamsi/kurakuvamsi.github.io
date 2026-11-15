# EduOrbit — EXACT Prototype 7 Angular edition

## Goal
This edition prioritizes **visual and behavioral fidelity**. The original EduOrbit 7 HTML/CSS/JS file is preserved unmodified except for an appended, non-invasive Angular URL synchronization bridge at `public/prototype/index.html`. As a result, color contrast, layouts, login, sample records, report views, and the CRUD flows use the actual Prototype 7 implementation, not recreated approximations.

## Architectural honesty
This is an **Angular host with real feature route declarations** and a retained Prototype 7 compatibility runtime. Each feature has a named routed Angular component in `src/app/features/`. The routed components are navigation placeholders, **NOT native Angular rewrites of the feature screens**. All substantive UI and data logic still lives in `public/prototype/index.html`. That is the tradeoff for exact appearance and functionality today. A later native Angular migration must replace them module-by-module with faithful HTML/CSS markup and Angular state services.

## Run
Use Node.js compatible with Angular 20. From this directory:

```bash
npm install
npm start
```

Open http://localhost:4200. On login choose Student or Teaching Staff; password is `Demo@123`. If sample data is missing click Restore sample data.

## GitHub Pages

The production build uses `/eduorbit/` as its base path for the project URL. To publish an update, run `npm run build:pages`, copy the contents of `dist/eduorbit-v7/browser/` into this project folder, and push the changes to `main`. The build creates a `404.html` fallback so refreshing an Angular route works on GitHub Pages. GitHub Pages serves the app from `https://kurakuvamsi.github.io/eduorbit/`.

## Android

```bash
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

Requires Android Studio and the Android SDK. No prebuilt APK or verified compiled `dist` folder is provided.

## Layout

- `src/app/features/{feature}` – explicit routed Angular feature components (routing placeholders)
- `src/app/app.routes.ts` – Angular routes
- `src/app/app.component.ts` – preserved UI host and VamsiTech Talks loading screen
- `public/prototype/index.html` – the real Prototype 7 UI and all demo workflows

This project uses browser-local demo state and is NOT production-ready authentication/authorization.


## Version 10.0.1: sidebar hover fix

The original prototype applied `transform: translateY(-1px)` to all hovered buttons. That also moved the sidebar navigation buttons under the cursor, potentially causing mouseenter/mouseleave flicker. The final CSS override in `public/prototype/index.html` disables transforms only for `.nav button`, while retaining the original teal active/hover colors, font, layout, spacing, and all demo flows.

Extract into a NEW folder (do not mix with the old version), then run `npm install` and `npm start`. Use Ctrl+Shift+R in the browser to force a refresh. The underlying Prototype 7 UI remains hosted within an Angular iframe, as in Version 10.


## 10.0.2 Stable sidebar fix

The original hover transition is now disabled completely for sidebar items, with fixed hitboxes and no hover transforms. Existing teal active highlighting, labels, sizes and page workflows remain unchanged. The desktop sidebar also no longer carries the mobile off-canvas transform. On mobile, the existing off-canvas animation remains.

If you still see visible flickering, please capture a short screen recording including pointer movement. Browser rendering glitches, scrollbars and iframe compositing cannot be diagnosed from a still screenshot alone.
