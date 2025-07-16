import Image from "next/image";
import user from '@/public/user.svg';
import gameIconDiamond from '@/public/gameIconDiamond.svg';
import ribbon from '@/public/IoRibbonOutline.png';
import frame from '@/public/Frame 1592.png'


export default function WhyChoose() {
  const features = [
    {
      image: user,
      title: "Personal Design Consultation",
      description: "Work with our designers to create your perfect piece.",
    },
    {
      image: gameIconDiamond,
      title: "Crafted with Luxury Materials",
      description: "Only the finest diamonds, gemstones, and precious metals.",
    },
    {
      image: ribbon,
      title: "Lifetime Warranty",
      description: "Lifetime warranty on every piece, ensuring quality and confidence.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
  <h3 className="font-playfair text-[36px] leading-[50px] tracking-[0.01em] text-[#101010]">
    Why Choose MyJewel?
  </h3>
</div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="text-center p-8 bg-white rounded-lg shadow-sm">
          <div className="mb-4 flex justify-center">
            <Image
              src={feature.image}
              alt={feature.title}
              width={45}
              height={45}
              className="object-contain"
            />
          </div>
          <h3 className="text-[20px] font-playfair text-[#15274B] mb-4">
            {feature.title}
          </h3>
          <p className="text-[#7A7A7A] text-[16px]">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>

  {/* background image */}
  <Image
    src={frame}
    alt=""
    width={600}
    height={600}
    className="absolute right-0 bottom-0 z-0 pointer-events-none"
  />
</section>

  );
}
