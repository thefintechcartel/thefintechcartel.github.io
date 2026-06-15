# The Fintech Cartel

Finance and tech content — built with [Astro](https://astro.build) and deployed via GitHub Pages.

## Getting Started

### Prerequisites
- Node.js 18+ (download at nodejs.org)
- A GitHub account

### Local Development

```bash
npm install
npm run dev
```

The site will be at `http://localhost:4321`.

---

## Writing a Blog Post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "One sentence that describes the post."
pubDate: 2025-06-15
author: Adyaan          # or: You (swap with your real name)
category: Finance       # or: Tech
tags: [tag1, tag2]
draft: false            # set to true to hide while writing
---

Your post content goes here in Markdown.

## Section Heading

Normal paragraph text...
```

The filename becomes the URL slug. `my-first-post.md` → `/blog/my-first-post`.

---

## Adding a Video

Open `src/pages/videos.astro` and add an entry to the `videos` array:

```ts
{
  ep: 'EP. 04',
  title: 'Your Video Title',
  description: 'Short description.',
  author: 'Adyaan',
  url: 'https://youtube.com/watch?v=...',  // add when live
},
```

---

## Deploying to GitHub Pages

### First-time setup

1. Create a GitHub repo named `<yourusername>.github.io`
2. Push this entire folder to the `main` branch
3. Go to **Settings → Pages → Source** and select **GitHub Actions**
4. Update `astro.config.mjs` with your actual site URL

That's it. Every `git push` to `main` triggers an automatic build and deploy.

### If using a project repo (not `<username>.github.io`)

In `astro.config.mjs`, add:
```js
base: '/your-repo-name',
```

---

## Project Structure

```
tfc/
├── src/
│   ├── content/
│   │   └── blog/          ← your .md posts go here
│   ├── content.config.ts  ← blog schema (frontmatter validation)
│   ├── layouts/
│   │   ├── Base.astro     ← shared nav + footer wrapper
│   │   └── BlogPost.astro ← individual post layout
│   ├── pages/
│   │   ├── index.astro    ← Home
│   │   ├── blog/
│   │   │   ├── index.astro    ← Blog listing
│   │   │   └── [slug].astro   ← Dynamic post page
│   │   ├── videos.astro   ← Videos page
│   │   └── contact.astro  ← Contact page
│   ├── components/
│   │   └── Nav.astro
│   └── styles/
│       └── global.css
├── public/
│   └── favicon.svg
├── .github/workflows/
│   └── deploy.yml         ← auto-deploy on push
└── astro.config.mjs
```
