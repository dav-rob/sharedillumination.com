# SharedIllumination Blogging Guide (David)

## 1) Write in Obsidian
Create posts in Markdown with frontmatter:

```md
---
title: "Your Post Title"
date: 2026-03-16
draft: true
tags: [idea, note]
---

Your content here.
```

When ready, save to:
- `content/posts/YYYY-MM-DD-your-slug.md`

Use `content/posts/_template.md` as your starter.

## 2) Preview locally

```bash
npm install
npm run dev
```

Open `http://localhost:8080` and review formatting.

## 3) Publish
- Set `draft: false` (or remove `draft`).
- Build once to confirm production output:

```bash
npm run build
```

- Commit + push to `main`.

GitHub Actions deploys automatically to Pages.

## 4) Live URLs
- Primary: `https://sharedillumination.com`
- Redirect: `https://www.sharedillumination.com`

## 5) Quick checklist before publish
- Title clear and specific
- Intro in first 2–4 lines
- Headings scannable
- Links valid
- `draft` removed/false

## 6) Troubleshooting
- If local page missing: check file path is in `content/posts/`.
- If post missing on homepage: confirm `draft` is not `true`.
- If live not updated yet: check latest GitHub Actions run.
