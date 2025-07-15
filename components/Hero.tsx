export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900">Custom Jewelry</h1>
            <p className="text-lg text-gray-600 max-w-md">Create Your Masterpiece: Bespoke Jewelry Crafted for You</p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=200&text=Diamond+1"
                  alt="Diamond"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=200&width=200&text=Diamond+2"
                  alt="Diamond"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/placeholder.svg?height=200&width=200&text=Diamond+3"
                  alt="Diamond"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=200&width=200&text=Diamond+4"
                  alt="Diamond"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
              <img
                src="/placeholder.svg?height=300&width=200&text=Ring"
                alt="Custom Ring"
                className="w-48 h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
