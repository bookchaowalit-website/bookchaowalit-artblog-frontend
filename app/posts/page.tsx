import Link from 'next/link'
import Artwork from '@/components/Artwork'
import { getAllPosts } from '@/lib/mdx'

export const metadata = { title: 'Reading room — Creative Arts Knowledge', description: 'Written guides on art, design, photography, and creative practice.' }

export default async function PostsPage() {
  const posts = await getAllPosts()
  return <main className="art-page art-reading-page"><div className="art-reading-head"><Link href="/">← Index</Link><h1>The reading room.</h1><p>Five notes on looking, arranging, and making.</p></div><div className="art-post-grid">{posts.map((post, index) => <Link className="art-post-card" href={`/posts/${post.slug}`} key={post.slug}><Artwork compact variant={post.slug.split('-').slice(3).join('-')} label={post.tags[0] ?? 'Field note'} /><div className="art-post-copy"><span>{String(index + 1).padStart(2, '0')} / {post.date}</span><h2>{post.title}</h2><p>{post.summary}</p><small>{post.readTime} · {post.tags.join(' / ')}</small></div></Link>)}</div></main>
}
