import Link from 'next/link'

const categories = [
  {
    id: 'illustration',
    name: 'Illustration',
    definition: 'การสร้างภาพเพื่อสื่อความหมายหรือเสริมเนื้อหา ใช้ในหนังสือ บทความ โฆษณา และงาน concept art',
    description: 'Digital and traditional drawing techniques, character design, and visual storytelling',
    color: 'bg-blue-500',
    icon: '🎨'
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    definition: 'การใช้ภาพ ข้อความ และองค์ประกอบภาพเพื่อสื่อสารข้อความหรือสร้างความประทับใจ',
    description: 'Visual communication, branding, print and digital design',
    color: 'bg-green-500',
    icon: '✏️'
  },
  {
    id: 'photography',
    name: 'Photography',
    definition: 'ศิลปะและเทคนิคการบันทึกภาพด้วยแสง ใช้กล้องหรืออุปกรณ์อื่นๆ',
    description: 'Camera techniques, composition, lighting, and post-processing',
    color: 'bg-purple-500',
    icon: '📷'
  },
  {
    id: 'painting',
    name: 'Painting',
    definition: 'การใช้สีและแปรงเพื่อสร้างภาพบนผ้าใบหรือพื้นผิวอื่นๆ',
    description: 'Oil, acrylic, watercolor techniques, and art history',
    color: 'bg-red-500',
    icon: '🖌️'
  },
  {
    id: 'sculpture',
    name: 'Sculpture',
    definition: 'การสร้างงานศิลปะสามมิติจากวัสดุต่างๆ เช่น ดิน หิน หรือโลหะ',
    description: '3D art forms, materials, and sculpting techniques',
    color: 'bg-yellow-500',
    icon: '🗿'
  },
  {
    id: 'digital-art',
    name: 'Digital Art',
    definition: 'การสร้างงานศิลปะโดยใช้เครื่องมือดิจิทัลและซอฟต์แวร์',
    description: 'Digital painting, 3D modeling, animation, and software tools',
    color: 'bg-indigo-500',
    icon: '💻'
  },
  {
    id: 'typography',
    name: 'Typography',
    definition: 'ศิลปะและเทคนิคการจัดวางตัวอักษรและการออกแบบตัวอักษร',
    description: 'Font design, layout, and text-based visual communication',
    color: 'bg-pink-500',
    icon: '🔤'
  },
  {
    id: 'animation',
    name: 'Animation',
    definition: 'การสร้างภาพเคลื่อนไหวโดยใช้เทคนิคต่างๆ เช่น 2D, 3D, หรือ stop-motion',
    description: 'Frame-by-frame animation, motion graphics, and storytelling',
    color: 'bg-orange-500',
    icon: '🎬'
  }
]

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">ประเภทศิลปะและงานสร้างสรรค์</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          สำรวจความรู้เกี่ยวกับศิลปะและงานสร้างสรรค์ต่างๆ
          ค้นหาประเภทที่คุณสนใจและเรียนรู้อย่างละเอียด
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map(category => (
          <div key={category.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white text-2xl mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {category.definition}
              </p>
              <p className="text-gray-500 text-xs mb-6">
                {category.description}
              </p>
              <Link
                href={`/arts/${category.id}`}
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                เรียนรู้เพิ่มเติม
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          กลับหน้าหลัก
        </Link>
      </div>
    </div>
  )
}
