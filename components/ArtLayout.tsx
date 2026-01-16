import Image from 'next/image'
import Link from 'next/link'

interface Category {
  id: string
  title: string
  definition: string
  description: string
  coverImage: string
}

interface ArtLayoutProps {
  category: Category
  children: React.ReactNode
}

export default function ArtLayout({ category, children }: ArtLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-center mb-4">
          <Link href="/" className="text-purple-600 hover:text-purple-700 text-sm">
            ← กลับหน้าหลัก
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
        <Image
          src={category.coverImage}
          alt={category.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-lg text-gray-700 mb-4">{category.definition}</p>
        <p className="text-gray-600">{category.description}</p>
      </header>

      <div className="prose prose-lg prose-gray max-w-none">
        {children}
      </div>

      <footer className="mt-12 pt-8 border-t">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium">
            ← กลับหน้าหลัก
          </Link>
          <div className="flex space-x-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              แชร์
            </button>
          </div>
        </div>
      </footer>
    </article>
  )
}
