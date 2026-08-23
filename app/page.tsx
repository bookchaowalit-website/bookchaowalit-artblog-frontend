import Link from 'next/link'
import Artwork from '@/components/Artwork'
import { getAllPosts } from '@/lib/mdx'

const categories = [
  ['illustration', 'Illustration', 'image / story'], ['graphic-design', 'Graphic design', 'form / message'],
  ['photography', 'Photography', 'light / moment'], ['painting', 'Painting', 'surface / gesture'],
  ['sculpture', 'Sculpture', 'volume / material'], ['digital-art', 'Digital art', 'tool / image'],
  ['typography', 'Typography', 'letter / rhythm'], ['animation', 'Animation', 'time / movement'],
]

export default async function Home() {
  const posts = await getAllPosts()
  const [featured, ...latest] = posts
  return <main className="art-page">
    <section className="art-hero">
      <div className="art-hero-copy"><h1>A working index of art and making.</h1><p>Definitions, techniques, and small field notes for people who want to look closer and make with intent.</p><Link className="art-button" href="/posts">Open the reading room <span aria-hidden="true">↗</span></Link></div>
      {featured ? <Link className="art-feature" href={`/posts/${featured.slug}`}><Artwork variant={featured.slug.split('-').slice(3).join('-')} label={featured.tags[0] ?? 'Field note'} /><div className="art-feature-copy"><span>FEATURED NOTE / {featured.date}</span><h2>{featured.title}</h2><p>{featured.summary}</p><b>Read note <span aria-hidden="true">→</span></b></div></Link> : null}
    </section>
    <section className="art-section art-subjects" aria-labelledby="subjects-title"><div className="art-section-title"><h2 id="subjects-title">Find a subject</h2><span>08 fields</span></div><div className="art-subject-grid">{categories.map(([id, name, note], index) => <Link href={`/arts/${id}`} key={id}><span>{String(index + 1).padStart(2, '0')}</span><strong>{name}</strong><small>{note}</small><i aria-hidden="true">↗</i></Link>)}</div></section>
    <section className="art-section" aria-labelledby="latest-title"><div className="art-section-title"><h2 id="latest-title">Latest notes</h2><Link href="/posts">All posts →</Link></div><div className="art-reading-list">{latest.map((post, index) => <Link href={`/posts/${post.slug}`} key={post.slug}><span>{String(index + 2).padStart(2, '0')}</span><time dateTime={post.date}>{post.date}</time><strong>{post.title}</strong><small>{post.readTime}</small><i aria-hidden="true">↗</i></Link>)}</div></section>
    <section className="art-closing"><p>The archive is small on purpose. Read one note, follow one material, then make something that can answer back.</p><Link href="/about">About the notebook →</Link></section>
  </main>
}
