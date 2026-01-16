export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Creative Arts Blog</h3>
            <p className="text-gray-600 mb-4">
              Explore knowledge of various art styles, design techniques, and creative fields.
              Discover inspiration and learn from experts in the creative community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.975.015 6.59.07 5.193.124 4.185.247 3.42.465c-.766.226-1.417.533-2.07.904a4.902 4.902 0 00-1.77 1.77c-.37.653-.678 1.304-.904 2.07C-.247 6.185-.124 7.193-.07 8.59-.015 9.975 0 10.396 0 14.017s-.015 4.042-.07 5.427c-.054 1.397-.177 2.405-.395 3.17-.226.766-.533 1.417-.904 2.07a4.902 4.902 0 00-1.77 1.77c-.653.37-1.304.678-2.07.904-.765.218-1.773.341-3.17.395C2.042 23.985 1.621 24 0 24s-2.042-.015-2.827-.07c-1.397-.054-2.405-.177-3.17-.395-.766-.226-1.417-.533-2.07-.904a4.902 4.902 0 00-1.77-1.77c-.37-.653-.678-1.304-.904-2.07-.218-.765-.341-1.773-.395-3.17C.015 18.042 0 17.621 0 14.017s.015-4.042.07-5.427c.054-1.397.177-2.405.395-3.17.226-.766.533-1.417.904-2.07a4.902 4.902 0 001.77-1.77c.653-.37 1.304-.678 2.07-.904.765-.218 1.773-.341 3.17-.395C4.042.015 4.463 0 8.085 0s4.042.015 5.427.07c1.397.054 2.405.177 3.17.395.766.226 1.417.533 2.07.904a4.902 4.902 0 001.77 1.77c.653.37 1.304.678 2.07.904.765.218 1.773.341 3.17.395C19.958 1.985 20.379 2 24 2s2.042-.015 2.827-.07c1.397-.054 2.405-.177 3.17-.395.766-.226 1.417-.533 2.07-.904a4.902 4.902 0 001.77-1.77c.37-.653.678-1.304.904-2.07.218-.765.341-1.773.395-3.17C23.985 2.042 24 1.621 24 0s-.015-2.042-.07-2.827c-.054-1.397-.177-2.405-.395-3.17-.226-.766-.533-1.417-.904-2.07a4.902 4.902 0 00-1.77-1.77c-.653-.37-1.304-.678-2.07-.904-.765-.218-1.773-.341-3.17-.395C21.958.015 21.537 0 18.085 0zM12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zm0 10.18a4.001 4.001 0 110-8.002 4.001 4.001 0 010 8.002zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Illustration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Graphic Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Photography</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Digital Art</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">&copy; 2025 Creative Arts Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
