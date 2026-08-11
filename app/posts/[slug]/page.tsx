import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { getAllPosts, getPostBySlug, getPostSlugs } from '@/lib/mdx'
import { useMDXComponents } from '@/mdx-components'
import PostLayout from '@/components/PostLayout'
import Meta from '@/components/Meta'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const posts = await getAllPosts()
  const post = posts.find(p => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} - Creative Arts Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.coverImage],
      type: 'article',
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug).catch(() => null)

  if (!post) {
    notFound()
  }

  const { content } = await compileMDX({
    source: post.content,
    // Meta isn't a hook, just resolving a component name used inline in
    // the MDX source — safe in this Server Component tree.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    components: useMDXComponents({ Meta }),
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
      },
    },
  })

  return (
    <PostLayout post={post}>
      {content}
    </PostLayout>
  )
}
