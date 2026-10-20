# WholeLottaSites

Static marketing site for wholelottasites.co.uk (TanStack Start + Tailwind, exported from Lovable and made host-independent).

- `npm install && npm run build` → fully static site in `dist/client/` (all 7 routes prerendered to HTML).
- Deploys to GitHub Pages via `.github/workflows/deploy.yml` (Settings → Pages → Source: GitHub Actions).
- Form endpoint and Stripe link: `src/config.ts`.
- When moving the domain: add `public/CNAME` containing `wholelottasites.co.uk`.
