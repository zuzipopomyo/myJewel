import Image from "next/image";
import ringWithDiamond from "@/public/Frame 2689 (1).png";
import diamondsRign from "@/public/Frame 2696.png";
export default function Process() {
  const steps = [
    {
      number: "1",
      title: "CONSULTATION",
      description:
        "We discuss your vision and preferences to craft a unique design.",
    },
    {
      number: "2",
      title: "SELECTING MATERIALS",
      description:
        "Choose from exquisite diamonds, precious metals, and gemstones.",
    },
    {
      number: "3",
      title: "CREATING A 3D MODEL",
      description:
        "Visualize your design with a precise 3D model before production.",
    },
    {
      number: "4",
      title: "MANUFACTURING",
      description:
        "Expert artisans bring your piece to life with precision and care.",
    },
    {
      number: "5",
      title: "QUALITY ASSURANCE",
      description:
        "Every detail is inspected to ensure flawless craftsmanship.",
    },
    {
      number: "6",
      title: "DELIVERY",
      description:
        "Your custom jewelry is elegantly packaged and delivered to you.",
    },
  ];

  return (
    <>
      <h3 className="my-5 pt-2 ms-[120px] text-[14px] font-dmsans text-[#7A7A7A]">
        Home / Custom Jewelry
      </h3>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-[36px] text-[#101010] font-playfair mb-6">
                Custom Jewelry
              </h2>
              <p className="text-[20px] mb-8 font-dmsans text-[#434343]">
                Create Your Masterpiece: Bespoke <br /> Jewelry Crafted for You
              </p>

              <div className="grid grid-cols-2 gap-4 ">
                <div className="relative">
                  <Image
                    src={ringWithDiamond}
                    alt=""
                    width={373}
                    height={476}
                  />
                  <Image
                    src={diamondsRign}
                    alt=""
                    width={239}
                    height={317}
                    className="absolute top-[230px] left-[200px] z-[200px]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-[#434343] font-dmsans text-[16px]">
                Exquisite design, flawless craftsmanship, and timelessxa
                elegance—your vision perfectly realized.
              </p>

              <div className="space-y-4 font-dmsans">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 border-b pb-4 text-[#7A7A7A] leading-[1.6]"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-dmsans text-[20px] leading-[32px] tracking-[0.01em] uppercase text-[#7A7A7A]">
                      O{step.number}
                    </div>

                    <div>
                      <h3 className="font-dmsans text-[24px] leading-[1.6] tracking-[0.1em] uppercase text-[#101010]">
                        {step.title}
                      </h3>

                      <p className="text-[20px] font-dmsans text-[#7A7A7A]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
