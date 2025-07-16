"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const FALLBACK = [
  {
    id: 1,
    name: "Amelia R.",
    username: "Product Quality Engineer",
    testimonial: "Absolutely breathtaking! The craftsmanship of my diamond ring.",
    avatar: "/Frame 2701.png",
  },
  {
    id: 2,
    name: "Stephen L.",
    username: "Product Quality Engineer",
    testimonial: "From the moment I stepped into iDiamond, I felt like royalty. ",
    avatar: "/Frame 2702.png",
  },
  {
    id: 3,
    name: "Natalie G.",
    username: "Product Quality Engineer",
    testimonial: "Every detail, from the sparkle of the diamonds to the elegant packaging.",
    avatar: "/Frame 2703.png",
  },
  {
    id: 4,
    name: "Daniel W.",
    username: "Product Quality Engineer",
    testimonial: "Exceptional quality and outstanding service  doesn’t just sell jewelry.!",
    avatar: "/Frame 2704.png",
  },
  {
    id: 5,
    name: "Emma S.",
    username: "Senior Designer",
    testimonial: "Loved the ring design! It's elegant, classy, and just my style.",
    avatar: "/Frame 2701.png",
  },
  {
    id: 6,
    name: "Liam K.",
    username: "Art Director",
    testimonial: "The customization process was seamless. Very impressed.",
    avatar: "/Frame 2702.png",
  },
  {
    id: 7,
    name: "Sophia B.",
    username: "Digital Marketer",
    testimonial: "I cried when I opened the box. Stunning craftsmanship!",
    avatar: "/Frame 2703.png",
  },
  {
    id: 8,
    name: "James T.",
    username: "UX Specialist",
    testimonial: "Perfect anniversary gift. The team was so helpful!",
    avatar: "/Frame 2704.png",
  },
];

const ITEMS_PER_PAGE = 4;

export default function Testimonials() {
  const [page, setPage] = useState(1);
  const [animationStage, setAnimationStage] = useState<number[]>([]);
  const totalPages = Math.ceil(FALLBACK.length / ITEMS_PER_PAGE);

  const paginatedTestimonials = FALLBACK.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setAnimationStage([]);
    paginatedTestimonials.forEach((_, i) => {
      setTimeout(() => {
        setAnimationStage((prev) => [...prev, i]);
      }, i * 120);
    });
  }, [page]);

  const handleChangePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== page) {
      setPage(newPage);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900">Testimonials</h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={() => handleChangePage(page - 1)}
            disabled={page === 1}
            className="p-2 rounded-full bg-gray-200 disabled:opacity-30 shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
            {paginatedTestimonials.map((t, i) => (
              <div
                key={t.id}
                className={`bg-white p-6 shadow-sm text-center border transform transition-all duration-500 ${
                  animationStage.includes(i)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="w-[120px] h-[120px] mx-auto mb-4 object-cover "
                />
                <h3 className="text-[14px] font-dmsans text-[#505050]">{t.name}</h3>
                <p className="text-[12px] font-dmsans text-[#505050]">{t.username}</p>
                <p className="text-[13px] font-dmsan text-[#434343]">
                  “{t.testimonial.slice(0, 100)}…”
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleChangePage(page + 1)}
            disabled={page === totalPages}
            className="p-2 rounded-full bg-gray-200 disabled:opacity-30 shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
