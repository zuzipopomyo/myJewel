import photo from '@/public/Frame 1578.png'
import Image from 'next/image'
export default function ExploreMore() {
  const links = [
    { text: "How to Select the Right Wedding Ring", number: "01" },
    { text: "Lab Grown Diamond Guide", number: "02" },
    { text: "How to Choose the Engagement Ring", number: "03" },
    { text: "Ring Size Guide", number: "04" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">Explore More</h2>
            <p className="text-gray-600 mb-8">
              Looking for more diamond guides, buying tips or details about the 4Cs? Explore more of our diamond education pages:
            </p>

            <div className="space-y-4">
              {links.map((link, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-900">{link.text}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-sm">{link.number}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Image
            src={photo}
            alt=''
            width={500}
            height={500}

            />
          </div>
        </div>
      </div>
    </section>
  )
}
