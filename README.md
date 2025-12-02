# Personal Website — Dark Blue Theme (Astro v4 + Tailwind)

- Blue-focused theme (less cyan), grain + glow, soft cards.
- Blog/Keto/Bitcoin show **stacked** post cards.
- Post cards show a **pastel tag** in bottom-left (first tag).
- Auto filters:
  - Search by title
  - Filter by tag (Blog page)
  - Sort by date/name (all lists)
  - No apply button (auto-submit via `requestSubmit()`)

Run:

```bash
npm i
npm run dev
```

Safe overwrite: keep your `.git/` and any custom `.github/` workflows; reinstall deps after copying.

To pull changes from remote and update the server hosted content, run (on the server):

```bash
~/apps/personal-website/deploy.sh
```