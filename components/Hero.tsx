import Image from "next/image";
import heroImage from "@/public/Frame 1038 (1).png";

export default function Hero() {
  return (
    <section className="bg-gray-50 ">
      <div className="">
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={heroImage}
            alt="Discover Our Exclusive Jewelry Collection"
            fill
            className="object-cover "
            priority
      
          />
        </div>
      </div>
    </section>
  );
}