"use client"

import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useStoriesQuery } from "@/services/stories/queries"
import gsap from "gsap"

export default function StoryCarousel() {
  const router = useRouter()
  const { data = [] } = useStoriesQuery({ page: 1, pageSize: 10 })
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  // Add "Your Story" as the first item
  const storiesWithYourStory = [
    {
      user: {
        id: "your-story",
        firstName: "Your Story",
        lastName: "",
        profileImage: null,
      },
      infos: [],
      isYourStory: true,
    },
    ...data,
  ]

  // Check if scrolling is needed
  useEffect(() => {
    const checkScroll = () => {
      if (!carouselRef.current) return

      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }

    checkScroll()

    const element = carouselRef.current
    if (element) {
      element.addEventListener("scroll", checkScroll)
      return () => element.removeEventListener("scroll", checkScroll)
    }
  }, [data])

  const scrollLeft = () => {
    if (!carouselRef.current) return

    gsap.to(carouselRef.current, {
      scrollLeft: carouselRef.current.scrollLeft - 200,
      duration: 0.5,
      ease: "power2.out",
    })
  }

  const scrollRight = () => {
    if (!carouselRef.current) return

    gsap.to(carouselRef.current, {
      scrollLeft: carouselRef.current.scrollLeft + 200,
      duration: 0.5,
      ease: "power2.out",
    })
  }

  const handleStoryClick = (userId: string) => {
    if (userId === "your-story") {
      // Handle your story creation
      return
    }
    router.push(`/stories/${userId}`)
  }

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-md mx-auto relative">
        {/* Left scroll button */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1.5 border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
        )}

        {/* Right scroll button */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1.5 border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        )}

        {/* Story carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 px-4 py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {storiesWithYourStory.map((story: any) => (
            <div
              key={story.user.id}
              className="flex flex-col items-center flex-shrink-0 cursor-pointer"
              onClick={() => handleStoryClick(story.user.id)}
            >
              <div className="relative">
                {/* Story ring gradient */}
                {!story.isYourStory && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] -m-[2px]">
                    <div className="absolute inset-0 rounded-full bg-white p-[2px] -m-[2px]"></div>
                  </div>
                )}

                {/* Profile image */}
                <div
                  className={`relative w-16 h-16 rounded-full overflow-hidden ${story.isYourStory ? "border-2 border-gray-300" : "border-2 border-white"}`}
                >
                  <img
                    src={
                      story.user.profileImage ??
                      `https://ui-avatars.com/api/?name=${
                        encodeURIComponent(story.user.firstName + " " + story.user.lastName) || "/placeholder.svg"
                      }&background=e5e7eb&color=6b7280`
                    }
                    alt={story.user.firstName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Plus icon for "Your Story" */}
                {story.isYourStory && (
                  <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                    <span className="text-xs font-bold">+</span>
                  </div>
                )}
              </div>

              {/* Username */}
              <span className="text-xs mt-1 text-center w-16 truncate text-gray-900">
                {story.isYourStory ? "Your Story" : story.user.firstName.toLowerCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
