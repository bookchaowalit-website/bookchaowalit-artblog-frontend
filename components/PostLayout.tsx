import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/lib/mdx'

interface PostLayoutProps {
  post: Post
  children: React.ReactNode
}

export default function PostLayout({ post, children }: PostLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center mb-4">
          <span className="text-gray-600">{post.author}</span>
          <span className="mx-2">•</span>
          <span className="text-gray-600">{post.date}</span>
          <span className="mx-2">•</span>
          <span className="text-gray-600">{post.readTime}</span>
        </div>
        <Image
          src={post.coverImage}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-lg text-gray-700">{post.summary}</p>
      </header>

      <div className="prose prose-lg prose-gray max-w-none">
        {children}
      </div>

      <footer className="mt-8 pt-8 border-t">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
            >
              {tag}
            </Link>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Share
          </button>
        </div>
      </footer>
    </article>
  )
}
