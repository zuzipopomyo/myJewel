import photo from "@/public/Frame 1578.png";
import Image from "next/image";
import bsBoxArrowUpRight from "@/public/bsBoxArrowUpRight.svg";
export default function ExploreMore() {
  const links = [
    { text: "How to Select the Idea Wedding Band", number: "01" },
    { text: "Lab Grown Diamond Guide", number: "02" },
    { text: "How to Choose the Engagement Ring", number: "03" },
    { text: "Ring Size Guide", number: "04" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[32px] font-playfair font-[#7A7A7A] mb-6">
              Explore More
            </h2>
            <p className="text-[#7A7A7A] font-dmsans mb-8 text-[14px]">
              Looking for more diamond guides, buying tips or details about the
              4Cs? Explore more of our diamond education pages:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 pb-2"
                >
                  <span className="text-[#434343] font-dmsans text-[14px] underline cursor-pointer">
                    {link.text}
                  </span>
                  <Image
                    src={bsBoxArrowUpRight}
                    alt=""
                    width={50}
                    height={50}
                    className="ml-4"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <Image src={photo} alt="" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
