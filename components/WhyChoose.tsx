import Image from "next/image";

import UserCircleCheck from "@/public/PiUserCircleCheckLight.png";
import Diamond from "@/public/game-icons_diamond-hard (5).png";
import Ribbon from "@/public/IoRibbonOutline.png";


export default function WhyChoose() {
  const features = [
    {
      image: UserCircleCheck,
      title: "Personal Design Consultation",
      description: "Work with our designers to create your perfect piece.",
    },
    {
      image: Diamond,
      title: "Crafted with Luxury Materials",
      description: "Only the finest diamonds, gemstones, and precious metals.",
    },
    {
      image: Ribbon,
      title: "Lifetime Warranty",
      description: "Lifetime warranty on every piece, ensuring quality and confidence.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900">Why Choose MyJewel?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="mb-4 flex justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
     
      </div>
    </section>
  );
}
