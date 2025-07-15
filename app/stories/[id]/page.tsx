"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import gsap from "gsap"

// Mock data for stories
const storyData = {
  user2: {
    username: "lisa",
    image: "/placeholder.svg?height=200&width=200&text=Lisa",
    stories: [
      {
        id: "story1",
        media: "/placeholder.svg?height=800&width=450&text=Lisa's+Story+1",
        type: "image",
        duration: 5,
      },
      {
        id: "story2",
        media: "/placeholder.svg?height=800&width=450&text=Lisa's+Story+2",
        type: "image",
        duration: 3,
      },
    ],
  },
  user3: {
    username: "wjmild",
    image: "/placeholder.svg?height=200&width=200&text=WJ",
    stories: [
      {
        id: "story3",
        media: "/placeholder.svg?height=800&width=450&text=WJ's+Story",
        type: "image",
        duration: 5,
      },
    ],
  },
  user4: {
    username: "cooheart",
    image: "/placeholder.svg?height=200&width=200&text=CH",
    stories: [
      {
        id: "story4",
        media: "/placeholder.svg?height=800&width=450&text=This+story+is+no+longer+available",
        type: "image",
        duration: 5,
      },
    ],
  },
}

export default function StoryPage() {
  const router = useRouter()
  const params = useParams()
  const userId = params?.id as string
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const progressRefs = useRef<(HTMLDivElement | null)[]>([])
  const storyContainerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  const userData = storyData[userId as keyof typeof storyData]

  // If user data doesn't exist, redirect to home
  useEffect(() => {
    if (!userData && userId) {
      router.push("/")
    }
  }, [userData, userId, router])

  // Handle story progression
  useEffect(() => {
    if (!userData) return

    // Kill previous timeline if it exists
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    // Create new timeline
    timelineRef.current = gsap.timeline({
      onComplete: () => {
        if (currentStoryIndex < userData.stories.length - 1) {
          setCurrentStoryIndex((prev) => prev + 1)
        } else {
          router.push("/")
        }
      },
    })

    // Reset all progress bars
    progressRefs.current.forEach((ref, i) => {
      if (ref) {
        if (i < currentStoryIndex) {
          gsap.set(ref, { width: "100%" })
        } else if (i > currentStoryIndex) {
          gsap.set(ref, { width: "0%" })
        } else {
          gsap.set(ref, { width: "0%" })
          // Animate current progress bar
          timelineRef.current?.to(ref, {
            width: "100%",
            duration: userData.stories[currentStoryIndex]?.duration || 5,
            ease: "none",
          })
        }
      }
    })

    // Pause timeline if paused
    if (isPaused && timelineRef.current) {
      timelineRef.current.pause()
    } else if (!isPaused && timelineRef.current) {
      timelineRef.current.play()
    }
  }, [currentStoryIndex, userData, isPaused, router])

  // Handle touch to pause
  const handleTouchStart = () => {
    setIsPaused(true)
  }

  const handleTouchEnd = () => {
    setIsPaused(false)
  }

  // Handle navigation
  const handleNext = () => {
    if (!userData) return

    if (currentStoryIndex < userData.stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1)
    } else {
      router.push("/")
    }
  }

  const handlePrev = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1)
    } else {
      router.push("/")
    }
  }

  if (!userData) {
    return <div>Loading...</div>
  }

  const currentStory = userData.stories[currentStoryIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full z-10"
      >
        <X size={24} />
      </button>

      {/* Story container */}
      <div
        ref={storyContainerRef}
        className="w-full max-w-md aspect-[9/16] relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Progress bars */}
        <div className="absolute top-4 left-0 right-0 px-4 flex space-x-1 z-20">
          {userData.stories.map((_, i) => (
            <div key={i} className="flex-1 h-0.5 rounded-full bg-white/30 overflow-hidden">
              <div ref={(el) => (progressRefs.current[i] = el)} className="h-full bg-white w-0" />
            </div>
          ))}
        </div>

        {/* User info */}
        <div className="absolute top-8 left-0 right-0 px-4 flex items-center gap-2 z-20">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
            <img
              src={userData.image || "/placeholder.svg"}
              alt={userData.username}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium text-white">{userData.username}</span>
        </div>

        {/* Story content */}
        <div className="w-full h-full bg-neutral-900 overflow-hidden">
          <img src={currentStory.media || "/placeholder.svg"} alt="Story" className="w-full h-full object-contain" />
        </div>

        {/* Left and Right zones for click navigation */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer z-10" onClick={handlePrev} />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer z-10" onClick={handleNext} />
      </div>
    </div>
  )
}
