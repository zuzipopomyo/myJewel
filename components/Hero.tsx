import Image from "next/image";
import heroImage from "@/public/Frame 1038 (1).png";
import diamonds from "@/public/260ec924e2223bc5db7682b09d0235c1cf002096.png";
import ring from "@/public/image.png";
import oneDiamond from "@/public/image copy.png";
import rightArrow from "@/public/image copy 2.png";
import leftArrow from "@/public/image copy 3.png";

export default function Hero() {
  return (
    <section className="bg-[#F0F0F0] ">
      <div className="">
        <div className="relative border-red-300 w-full h-[200px] md:h-[250px] lg:h-[500px] rounded-lg overflow-hidden relative">
          <Image
            src={leftArrow}
            alt=""
            width={550}
            height={550}
            className="top-0 absolute"
          />
          <Image
            src={rightArrow}
            alt=""
            width={550}
            height={550}
            className="top-0 absolute right-0"
          />
          <Image
            src={diamonds}
            alt=""
            width={500}
            height={500}
            className="absolute bottom-10"
          />
          <Image
            src={ring}
            alt=""
            width={500}
            height={500}
            className="absolute right-0 bottom-0 "
          />
          <Image
            src={oneDiamond}
            alt=""
            width={300}
            height={300}
            className="top-0 right-0 absolute"
          />

          <div className=" text-center mt-[150px] text-[#434343] ">
            <h1 className="text-[48px] font-playfair">Custom Jewelry</h1>
            <h4 className="font-dmsans font-normal text-[20px] tracking-wider pt-10">
              Create Your Masterpiece: Bespoke Jewelry Crafted For You
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
