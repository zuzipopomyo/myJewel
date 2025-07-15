"use client";

import Image from "next/image";
import { useState } from "react";

const FALLBACK = [
  {
    id: 1,
    name: "Amelia R.",
    username: "Product Quality Engineer",
    testimonial:
      "Absolutely breathtaking! My engagement ring is everything I dreamed of and more.",
    avatar: "/Frame 2701.png",
  },
  {
    id: 2,
    name: "Stephen L.",
    username: "Product Quality Engineer",
    testimonial:
      "From design to delivery the service was flawless – highly recommend MyJewel.",
    avatar: "/Frame 2702.png",
  },
  {
    id: 3,
    name: "Natalie G.",
    username: "Product Quality Engineer",
    testimonial:
      "Every detail is perfect. I’ve never had a piece of jewellery feel this personal.",
    avatar: "/Frame 2703.png",
  },
  {
    id: 4,
    name: "Daniel W.",
    username: "Product Quality Engineer",
    testimonial:
      "Knowledgeable staff, quick replies, and an amazing custom necklace – thank you!",
    avatar: "/Frame 2704.png",
  },
  {
    id: 5,
    name: "Emma S.",
    username: "Senior Designer",
    testimonial:
      "Loved the ring design! It's elegant, classy, and just my style.",
    avatar: "/Frame 2701.png",
  },
  {
    id: 6,
    name: "Liam K.",
    username: "Art Director",
    testimonial:
      "The customization process was seamless. Very impressed.",
    avatar: "/Frame 2702.png",
  },
  {
    id: 7,
    name: "Sophia B.",
    username: "Digital Marketer",
    testimonial:
      "I cried when I opened the box. Stunning craftsmanship!",
    avatar: "/Frame 2703.png",
  },
  {
    id: 8,
    name: "James T.",
    username: "UX Specialist",
    testimonial:
      "Perfect anniversary gift. The team was so helpful!",
    avatar: "/Frame 2704.png",
  },
];

const ITEMS_PER_PAGE = 4;

export default function Testimonials() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(FALLBACK.length / ITEMS_PER_PAGE);
  const paginatedTestimonials = FALLBACK.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900">Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paginatedTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 shadow-sm text-center border"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 mx-auto mb-4 object-cover rounded-full"
              />
              <h3 className="font-medium text-gray-900 mb-1">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{t.username}</p>
              <p className="text-gray-600 text-sm">
                “{t.testimonial.slice(0, 100)}…”
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700">Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
