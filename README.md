# Creative Arts Blog

A Next.js blog exploring knowledge of various art styles, design techniques, and creative fields, built with MDX and hosted on Vercel.

## Features

- **Next.js App Router** with TypeScript
- **MDX** for writing posts with rich content
- **Tailwind CSS** for styling
- **Responsive images** and SEO optimization
- **Tag system** and search functionality
- **Vercel deployment** ready

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/app
  /posts/[slug]/page.tsx    # Individual post pages
  /page.tsx                 # Home page
/content
  /posts                    # MDX blog posts
/public
  /images                   # Static images
/lib
  mdx.ts                    # MDX utilities
/components
  PostLayout.tsx            # Post layout component
  Meta.tsx                  # SEO meta component
```

## Writing Posts

Create new `.mdx` files in `/content/posts` with frontmatter:

```yaml
---
title: "Post Title"
date: "2025-12-06"
tags: ["tag1", "tag2"]
coverImage: "/images/covers/cover.jpg"
author: "Author Name"
readTime: "5 min"
summary: "Post summary"
---
```

## Deployment

Deploy to Vercel with `vercel.json` configuration.

## Technologies

- Next.js 14
- MDX
- Tailwind CSS
- TypeScript
- Vercel
