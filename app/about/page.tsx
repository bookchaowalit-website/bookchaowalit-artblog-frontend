export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">เกี่ยวกับ Creative Arts Knowledge</h1>
        <p className="text-xl text-gray-600">
          แหล่งรวบรวมความรู้เกี่ยวกับศิลปะและงานสร้างสรรค์
        </p>
      </div>

      <div className="prose prose-lg prose-gray max-w-none">
        <h2>จุดประสงค์</h2>
        <p>
          Creative Arts Knowledge ถูกสร้างขึ้นเพื่อเป็นแหล่งรวบรวมความรู้ที่ครบถ้วน
          เกี่ยวกับศิลปะและงานสร้างสรรค์ต่างๆ โดยมุ่งเน้นให้ความรู้ที่เป็นประโยชน์
          สำหรับทั้งผู้เริ่มต้นและผู้ที่มีประสบการณ์
        </p>

        <h2>สิ่งที่คุณจะพบ</h2>
        <ul>
          <li><strong>คำจำกัดความที่ชัดเจน</strong> — อธิบายแต่ละสาขาศิลปะอย่างละเอียด</li>
          <li><strong>เทคนิคและวิธีการ</strong> — แนวทางปฏิบัติที่สามารถนำไปใช้ได้จริง</li>
          <li><strong>เครื่องมือแนะนำ</strong> — ซอฟต์แวร์และอุปกรณ์ที่เหมาะสม</li>
          <li><strong>ตัวอย่างงาน</strong> — ผลงานและกรณีศึกษา</li>
          <li><strong>ข้อมูลอุตสาหกรรม</strong> — แนวโน้มและโอกาสในสายงาน</li>
        </ul>

        <h2>สำหรับใคร</h2>
        <p>
          เว็บไซต์นี้เหมาะสำหรับทุกคนที่สนใจศิลปะและงานสร้างสรรค์ ไม่ว่าจะเป็น:
        </p>
        <ul>
          <li>นักเรียนและนักศึกษา</li>
          <li>มืออาชีพที่ต้องการอัพเดทความรู้</li>
          <li>ผู้ที่กำลังมองหาอาชีพในวงการศิลปะ</li>
          <li>ผู้ที่ชื่นชอบศิลปะและต้องการเรียนรู้เพิ่มเติม</li>
        </ul>

        <h2>การมีส่วนร่วม</h2>
        <p>
          หากคุณมีคำแนะนำ ข้อมูลเพิ่มเติม หรือต้องการแบ่งปันความรู้
          สามารถติดต่อเราได้ผ่านช่องทางต่างๆ
        </p>

        <h2>ติดต่อเรา</h2>
        <p>
          มีคำถามหรือข้อเสนอแนะ? ติดต่อเราได้ที่:
        </p>
        <ul>
          <li>Email: contact@creativearts.com</li>
          <li>Social Media: ติดตามเราในช่องทางโซเชียลมีเดีย</li>
        </ul>
      </div>

      <div className="text-center mt-12">
        <a
          href="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          กลับหน้าหลัก
        </a>
      </div>
    </div>
  )
}
