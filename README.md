# Portfolio

A personal developer portfolio + digital resume. High-contrast dark
editorial / brutalist-refined style: near-black background, off-white
type, monospace metadata, numbered sections, editorial project rows.

Built with Next.js 14 (App Router) + TypeScript. No UI framework or
component library — layout and styling are plain CSS in
`app/globals.css`, so there's nothing extra to learn to make changes.

## 1. Open it in VS Code

```bash
cd portfolio
code .
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run it locally

```bash
npm run dev
```

Open http://localhost:3000. The resume page is at
http://localhost:3000/resume.

## Edit your content

Everything on the site — your name, role, statement, projects, skills,
experience, notes, and lab entries — lives in one file:

```
lib/data.ts
```

Open it and replace the placeholder values. You don't need to touch any
other file to update content. A few notes:

- `projects`: mark exactly one project `featured: true` to control which
  one gets the large case-study layout in section 01.
- `experience`: ordered newest first; each entry needs a `year` used for
  the sticky year rail on the resume page.
- The site pulls your accent color, fonts, and spacing from CSS custom
  properties at the top of `app/globals.css` (`:root`) if you want to
  adjust the visual system itself.

## Project structure

```
app/
  layout.tsx        Root layout, loads fonts (Space Grotesk + JetBrains Mono)
  globals.css        Design tokens + all styling
  page.tsx           Homepage: hero + sections 01–07
  resume/page.tsx    Two-column resume page
components/
  Header.tsx         Sidebar navigation (used on every page)
  Footer.tsx          Back-to-top + colophon
lib/
  data.ts             All site content — edit this
```

## Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel will detect the Next.js app automatically.
Running `vercel` again after the first deploy will create a new
preview; use `vercel --prod` to push to your production domain.

**Option B — GitHub + Vercel dashboard**

1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Leave the default build settings (Vercel auto-detects Next.js: build
   command `next build`, output handled automatically).
4. Click Deploy.

Every subsequent push to your main branch will redeploy automatically.

## Adding real project images

The featured project block in section 01 currently renders a bordered
placeholder frame instead of an image, to keep the repo dependency-free.
To use a real screenshot:

1. Add the image to `public/`, e.g. `public/ledger-preview.png`.
2. In `app/page.tsx`, replace the `<div className="featured__frame">`
   contents with a Next.js `<Image>` component:

```tsx
import Image from "next/image";
// ...
<div className="featured__frame">
  <Image src="/ledger-preview.png" alt="Ledger preview" fill style={{ objectFit: "cover" }} />
</div>
```

## Notes on the design system

- Colors, type, and spacing are defined once as CSS variables in
  `app/globals.css` — change `--bg`, `--text`, `--muted`, `--border`, or
  `--accent` to retheme the whole site.
- The accent color (`--accent`) is used sparingly on purpose: status
  indicators, hover states, and one line in the hero. Keep it to a
  single restrained color if you change it.
- The resume page includes print styles (`@media print`) so visitors
  can save it as a PDF straight from the browser's print dialog.
