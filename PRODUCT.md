# Creative Arts Knowledge — Product brief

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Repository evidence suggests people learning about art, design, photography,
and creative practice, including beginners and working creatives.

## Product Purpose

Make creative-arts knowledge easier to browse from a category overview into
long-form posts. Success means a reader can find a subject, understand its
context, and continue into a focused article.

## Positioning

The product combines a broad art-category index with authored, date-stamped
MDX guides covering practical creative techniques.

## Operating Context

Readers browse categories such as illustration, graphic design, photography,
painting, digital art, typography, and animation, then read posts with cover
images, summaries, tags, and article metadata.

## Capabilities and Constraints

- Category pages and a blog index are part of the current app.
- Five MDX posts are present under `content/posts/`.
- Post detail routes and the existing MDX data layer must remain usable.
- No invented experts, testimonials, or industry claims should be added.

## Brand Commitments

The existing product name is Creative Arts Knowledge; the portfolio context is
Bookchaowalit. The content can remain bilingual where the repository already
uses Thai and English.

## Evidence on Hand

- `content/posts/` contains five authored MDX posts.
- `app/page.tsx` and `app/categories/page.tsx` define the category taxonomy.
- `lib/mdx.ts` and the post routes provide the reading data path.

## Product Principles

- Lead readers from orientation to a useful next read.
- Prefer concrete technique and context over vague inspiration.
- Keep content discoverable without hiding the article itself.

## Accessibility & Inclusion

Use semantic headings, meaningful image alternatives, keyboard-accessible
navigation, readable line lengths, and language metadata that matches content.
