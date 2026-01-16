import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import ArtLayout from "@/components/ArtLayout";
import Meta from "@/components/Meta";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const slugs = await getPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
    const post = await getPostBySlug(params.slug);

    if (!post) return {};

    return {
        title: `${post.title} - Creative Arts Knowledge`,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            images: [post.coverImage],
        },
    };
}

export default async function PostPage({ params }: PageProps) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    // Create a minimal category object for ArtLayout
    const category = {
        id: "blog",
        title: "Blog",
        definition: "Articles and insights about creative arts",
        description: "Learn about various creative arts techniques and history",
        coverImage: post.coverImage,
    };

    // Compile MDX content
    const { content } = await compileMDX({
        source: post.content,
        components: {
            Meta,
        },
    });

    return (
        <>
            <Meta
                title={`${post.title} - Creative Arts Knowledge`}
                description={post.summary}
            />
            <ArtLayout category={category}>
                <article className="prose prose-lg prose-gray max-w-none">
                    <h1>{post.title}</h1>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <p>By {post.author}</p>
                        <p>{post.date}</p>
                    </div>
                    {content}
                </article>
            </ArtLayout>
        </>
    );
}
