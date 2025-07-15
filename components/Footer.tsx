export default function Footer() {
  return (
    <footer className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">CONTACT US</h3>
            <div className="space-y-2 ">
              <p>Book Appointment</p>
              <p>Visit Our Stores</p>
              <p>Email Us</p>
              <p>Contact Us</p>
              <p>Schedule a consultation</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">THE ART OF GIFTING</h3>
            <div className="space-y-2 ">
              <p>Luxury Gift Wrapping</p>
              <p>Gift Cards</p>
              <p>Private & White-Glove Delivery</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">BESPOKE & SERVICES</h3>
            <div className="space-y-2">
              <p>Custom Jewelry Design</p>
              <p>Private Jewelry Consultations</p>
              <p>Jewelry Restoration & Care</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Let's Keep in Touch</h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 text-white rounded border border-gray-700 focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="mt-6">
              <p className="mb-2">Payment Methods</p>
              <div className="flex space-x-4">
                {/* Visa */}
                <div className="w-10 h-6 bg-blue-900 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">VISA</span>
                </div>
                {/* Mastercard */}
                <div className="w-10 h-6 bg-[#EB001B] rounded-l flex items-center justify-end pr-1">
                  <div className="w-10 h-6 bg-[#F79E1B] rounded-r flex items-center justify-start pl-1">
                    <span className="text-white font-bold text-[8px]">MC</span>
                  </div>
                </div>
                {/* Amex */}
                <div className="w-10 h-6 bg-[#016FD0] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AMEX</span>
                </div>
                {/* PayPal */}
                <div className="w-10 h-6 bg-[#003087] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">PP</span>
                </div>
                {/* Apple Pay */}
                <div className="w-10 h-6 bg-black rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025, All Rights Reserved - My Jewel</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}