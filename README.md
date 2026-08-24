# TASAGP

Website for the Twelve Apostles' Students Association (TASA) &mdash; Gauteng chapters.

A single-page site covering who TASA is, the mission pillars (Spiritual, Social,
Economic, Health, Academic), affiliated universities, a photo gallery, and
contact details.

## Tech stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) &mdash; dev server & build
- [Framer Motion](https://www.framer.com/motion/) &mdash; scroll/entrance animations

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  components/    # Navbar, Hero, About, Mission, Affiliates, Gallery, Footer
  data/          # universities.js — list of affiliated universities
  App.jsx        # assembles the page from the components above
  main.jsx       # React entry point
public/          # static assets served as-is (logo, gallery photos)
```

## Images

`public/` holds the optimized images actually used by the site (logo,
gallery photos). Raw/uploaded source images live in a local `images/`
folder that is gitignored &mdash; not tracked in this repo.

## Affiliated universities

Wits, UJ, TUT, UP, VUT, NWU &mdash; see `src/data/universities.js`.
