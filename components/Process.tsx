export default function Process() {
  const steps = [
    {
      number: "01",
      title: "CONSULTATION",
      description: "We discuss your vision and preferences to craft a unique design.",
    },
    {
      number: "02",
      title: "SELECTING MATERIALS",
      description: "Choose from exquisite diamonds, precious metals, and gemstones.",
    },
    {
      number: "03",
      title: "CREATING A 3D MODEL",
      description: "Visualize your design with a precise 3D model before production.",
    },
    {
      number: "04",
      title: "MANUFACTURING",
      description: "Expert artisans bring your piece to life with precision and care.",
    },
    {
      number: "05",
      title: "QUALITY ASSURANCE",
      description: "Every detail is inspected to ensure flawless craftsmanship.",
    },
    {
      number: "06",
      title: "DELIVERY",
      description: "Your custom jewelry is elegantly packaged and delivered to you.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">Custom Jewelry</h2>
            <p className="text-gray-600 mb-8">Create Your Masterpiece: Bespoke Jewelry Crafted for You</p>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/placeholder.svg?height=300&width=250&text=Ring+Process"
                alt="Jewelry Process"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="/placeholder.svg?height=300&width=250&text=Diamond+Setting"
                alt="Diamond Setting"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-gray-600">
              Exquisite design, flawless craftsmanship, and timeless elegance—your vision perfectly realized.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
