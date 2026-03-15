# sharedillumination.com — Phase 1 Blog Scaffold

Minimal Markdown-first blog setup using **Eleventy**.

## What this gives you

- Markdown posts in `content/posts` (Obsidian-friendly)
- Frontmatter metadata (`title`, `date`, optional `draft`, `tags`)
- Local preview server
- Production build output in `_site`

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown in terminal (usually `http://localhost:8080`).

## Daily workflow (David)

### 1) Draft

- Copy `content/posts/_template.md` to a new file like:
  - `content/posts/2026-03-20-my-new-post.md`
- Write your post in Markdown.
- Keep `draft: true` while it is not ready.

### 2) Preview

```bash
npm run dev
```

Check formatting and links locally.

### 3) Publish

- Set `draft: false` (or remove `draft`) in frontmatter.
- Build to verify production output:

```bash
npm run build
```

- Commit and push to your `dav-rob` repo.
- Deploy using your existing git-based hosting flow.

## Scripts

- `npm run dev` — start local dev server with watch mode
- `npm run build` — production build to `_site`
- `npm run clean` — remove generated `_site`

## Notes

- Keep Phase 1 intentionally simple and stable.
- No cross-post automation included yet.
