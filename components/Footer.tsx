export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">CONTACT US</h3>
            <div className="space-y-2 text-gray-300">
              <p>Store: Appointment</p>
              <p>Online: Always</p>
              <p>Phone: +1 234 567 8900</p>
              <p>Contact Us</p>
              <p>Book an Appointment</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">THE ART OF GIFTING</h3>
            <div className="space-y-2 text-gray-300">
              <p>Luxury Gift Wrapping</p>
              <p>Gift Cards</p>
              <p>Corporate Gift Office</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">SERVICES & SERVICES</h3>
            <div className="space-y-2 text-gray-300">
              <p>Custom Jewelry Design</p>
              <p>Jewelry Appraisal</p>
              <p>Ring Sizing & Consultation</p>
              <p>Jewelry Repair</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Let's Keep in Touch</h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-gray-500"
              />
              <button className="w-full bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>

            <div className="mt-6">
              <p className="text-gray-300 mb-2">Follow us on social media</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs">i</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs">p</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024. All Rights Reserved - MyJewel</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
