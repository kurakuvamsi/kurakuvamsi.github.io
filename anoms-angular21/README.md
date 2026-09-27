# ANOMS Angular 21 Website

This project is the supplied ANOMS HTML mockup converted to **Angular 21**.

## Project structure

```text
anoms-angular21/
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   ├── app/
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.css
│   └── assets/
│       ├── image-1.jpg
│       ├── image-2.jpg
│       └── image-3.jpg
└── public/
```

## Node.js

Angular 21 supports Node.js `^20.19.0`, `^22.12.0`, or `^24.0.0`.
This project was prepared for Node 22+.

## Install dependencies

From this folder:

```bash
npm install
```

## Start

```bash
npm start
```

## Production build

```bash
npm run build:prod
```

## Important

`node_modules` is intentionally not included in the ZIP because it is a generated dependency directory and is normally recreated with `npm install`. The supplied `package.json` pins the Angular 21 dependencies so the same dependency tree can be installed on your machine.
