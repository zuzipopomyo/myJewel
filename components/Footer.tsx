import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-[16px] mb-4">CONTACT US</h3>
            <div className="space-y-2 text-[14px] text-[#434343]">
              <p>Book Appointment</p>
              <p>Visit Our Stores</p>
              <p>Email Us</p>
              <p>Contact Us</p>
              <p>Schedule a consultation</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">THE ART OF GIFTING</h3>
            <div className="space-y-2  text-[14px] text-[#434343">
              <p>Luxury Gift Wrapping</p>
              <p>Gift Cards</p>
              <p>Private & White-Glove Delivery</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">BESPOKE & SERVICES</h3>
            <div className="space-y-2  text-[14px] text-[#434343">
              <p>Custom Jewelry Design</p>
              <p>Private Jewelry Consultations</p>
              <p>Jewelry Restoration & Care</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Let's Keep in Touch</h3>
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 pr-12 text-sm border border-gray-300 focus:outline-none focus:border-gray-500"
              />
              <button className="absolute top-1/2 -translate-y-1/2 right-0 w-[40px] h-[40px] bg-[#003057] flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.125 16.1487L16.0025 15.6875L30.875 22.3801V23.4499L16.0025 30.1213L15.125 29.6488L16.906 23L15.125 16.1487ZM18.0633 23.5625L16.6217 28.7707L29.1875 22.8874L16.6217 17.1934L18.0633 22.3686L24.125 22.4375V23.5625H18.0633Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <p className="mb-2">Payment Methods</p>
              <div className="flex space-x-4">
                {/* Visa */}
                   <div className="w-10 h-6 rounded flex items-center justify-center">
                  <Image src='/visa.svg' alt="" width={100} height={16}/>
                </div>
                {/* Visa */}
                   <div className="w-10 h-6 rounded flex items-center justify-center">
                  <Image src='/master.svg' alt="" width={100} height={16}/>
                </div>
                {/* Amex */}
                <div className="w-10 h-6  rounded flex items-center justify-center">
                  <Image src='/amex.svg' alt="" width={100} height={16}/>
                </div>
                {/* PayPal */}
                <div className="w-10 h-6 rounded flex items-center justify-center">
                  <Image src='/applePay.svg' alt="" width={100} height={16}/>
                </div>
                {/* Apple Pay */}
                <div className="w-10 h-6 rounded flex items-center justify-center">
                  <Image src='/teddy.svg' alt="" width={100} height={16}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025, All Rights Reserved - My Jewel
          </p>
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
  );
}
