import Link from 'next/link'
import Artwork from '@/components/Artwork'
import { Post } from '@/lib/mdx'

export default function PostLayout({ post, children }: { post: Post; children: React.ReactNode }) { return <article className="art-article"><Link href="/posts" className="art-article-back">← Reading room</Link><header><h1>{post.title}</h1><div className="art-article-meta"><span>{post.author}</span><span>·</span><span>{post.date}</span><span>·</span><span>{post.readTime}</span></div><div className="art-article-image"><Artwork variant={post.slug.split('-').slice(3).join('-')} label={post.tags[0] ?? 'Field note'} /></div><p className="art-article-summary">{post.summary}</p></header><div className="art-prose">{children}</div><footer className="art-article-footer"><div className="art-tags">{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link href="/posts" className="art-article-back">Back to index →</Link></footer></article> }
