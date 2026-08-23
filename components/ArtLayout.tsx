import Link from 'next/link'
import Artwork from '@/components/Artwork'

interface Category { id: string; title: string; definition: string; description: string; coverImage: string }
export default function ArtLayout({ category, children }: { category: Category; children: React.ReactNode }) { return <article className="art-article"><Link href="/" className="art-article-back">← Index</Link><header><h1>{category.title}</h1><div className="art-article-image"><Artwork variant={category.id} label={category.title} /></div><p className="art-article-summary">{category.definition}</p><p>{category.description}</p></header><div className="art-prose">{children}</div><footer className="art-article-footer"><Link href="/categories" className="art-article-back">All subjects →</Link></footer></article> }
