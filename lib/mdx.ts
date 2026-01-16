import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'

export interface Post {
    slug: string
    title: string
    date: string
    tags: string[]
    coverImage: string
    author: string
    readTime: string
    summary: string
    content: string
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function getPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => fileName.replace(/\.mdx$/, ''))
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        slug,
        ...data,
        content,
    } as Post
}

export async function getAllPosts(): Promise<Post[]> {
    const slugs = await getPostSlugs()
    const posts = await Promise.all(slugs.map(slug => getPostBySlug(slug)))
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}
