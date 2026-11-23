# ronish.dev

Personal site and writing archive for Ronish Rohan, built with Next.js.

## Stack

- [Next.js](https://nextjs.org) (App Router) with React 19
- Tailwind CSS 4
- Markdown posts in `content/blog/`, rendered with `unified` and `remark`
- Deployed on Vercel

## Project structure

```text
.
├── app/            # routes: home, blog, RSS feed, sitemap, layouts
├── components/     # shared UI (nav, footer, butterfly, postcards, ...)
├── content/blog/   # blog posts as Markdown with frontmatter
├── lib/            # blog loading, GitHub helpers, sounds, read tracking
├── public/         # fonts, images, favicons, OG image
├── resume/         # resume source (LaTeX) and PDF
└── types/          # ambient type declarations
```

## Commands

Run these from the project root:

| Command         | Action                                        |
| :-------------- | :-------------------------------------------- |
| `npm install`   | Install dependencies                          |
| `npm run dev`   | Start the dev server at `localhost:3000`      |
| `npm run build` | Build the production site                     |
| `npm run start` | Serve the production build locally            |

## Writing a post

Add a Markdown file to `content/blog/`. The filename becomes the URL slug, so `friction.md` is served at `/blog/friction`. The RSS feed at `/feed.xml` and the sitemap are generated from these files.
