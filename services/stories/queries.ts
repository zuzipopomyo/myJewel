"use client"

import { useState, useEffect } from "react"
import type { StoryDataItem, StoriesQueryParams } from "./types"

// Enhanced mock data for stories with more realistic data
const mockStories: StoryDataItem[] = [
  {
    user: {
      id: "user1",
      firstName: "Education",
      lastName: "and Employment",
      username: "education_employment",
      profileImage: "/placeholder.svg?height=200&width=200&text=Edu",
      isVerified: false,
    },
    infos: [
      {
        id: "story1",
        mediaPath: "/placeholder.svg?height=800&width=450&text=Education+and+Employment",
        mediaType: "IMAGE",
        durationInSeconds: 5,
      },
    ],
    timeAgo: "Sponsored",
    hasNewStory: false,
    isSponsored: true,
    thumbnail: "/placeholder.svg?height=400&width=225&text=Education",
  },
  {
    user: {
      id: "user2",
      firstName: "WJ",
      lastName: "Mild",
      username: "wjmild",
      profileImage: "/placeholder.svg?height=200&width=200&text=WJ",
      isVerified: false,
    },
    infos: [
      {
        id: "story2",
        mediaPath: "/placeholder.svg?height=800&width=450&text=WJ's+Story",
        mediaType: "IMAGE",
        durationInSeconds: 5,
      },
    ],
    timeAgo: "17h",
    hasNewStory: false,
    thumbnail: "/placeholder.svg?height=400&width=225&text=WJ+Mild",
  },
  {
    user: {
      id: "user3",
      firstName: "Cooheart",
      lastName: "",
      username: "cooheart",
      profileImage: "/placeholder.svg?height=200&width=200&text=CH",
      isVerified: true,
    },
    infos: [
      {
        id: "story3",
        mediaPath: "/placeholder.svg?height=800&width=450&text=This+story+is+no+longer+available",
        mediaType: "IMAGE",
        durationInSeconds: 6,
      },
    ],
    timeAgo: "1d",
    hasNewStory: true,
    newStoriesCount: 1,
    thumbnail: "/placeholder.svg?height=400&width=225&text=Cooheart",
  },
  {
    user: {
      id: "user4",
      firstName: "Vogue",
      lastName: "Magazine",
      username: "voguemagazine",
      profileImage: "/placeholder.svg?height=200&width=200&text=Vogue",
      isVerified: true,
    },
    infos: [
      {
        id: "story4",
        mediaPath: "/placeholder.svg?height=800&width=450&text=Vogue+Magazine",
        mediaType: "IMAGE",
        durationInSeconds: 5,
      },
      {
        id: "story5",
        mediaPath: "/placeholder.svg?height=800&width=450&text=Vogue+Magazine+2",
        mediaType: "VIDEO",
        durationInSeconds: 10,
      },
    ],
    timeAgo: "13h",
    hasNewStory: true,
    newStoriesCount: 2,
    thumbnail: "/placeholder.svg?height=400&width=225&text=Vogue",
  },
  {
    user: {
      id: "user5",
      firstName: "Art",
      lastName: "Nation",
      username: "artnation.ent",
      profileImage: "/placeholder.svg?height=200&width=200&text=Art",
      isVerified: false,
    },
    infos: [
      {
        id: "story6",
        mediaPath: "/placeholder.svg?height=800&width=450&text=Art+Nation",
        mediaType: "IMAGE",
        durationInSeconds: 4,
      },
    ],
    timeAgo: "Sponsored",
    hasNewStory: false,
    isSponsored: true,
    thumbnail: "/placeholder.svg?height=400&width=225&text=Art+Nation",
  },
  {
    user: {
      id: "user6",
      firstName: "Zuu",
      lastName: "Shweyi Hlaing",
      username: "zuu_shweyi",
      profileImage: "/placeholder.svg?height=200&width=200&text=Zuu",
      isVerified: false,
    },
    infos: [
      {
        id: "story7",
        mediaPath: "/placeholder.svg?height=800&width=450&text=Zuu's+Story",
        mediaType: "VIDEO",
        durationInSeconds: 15,
      },
    ],
    timeAgo: "3m",
    hasNewStory: true,
    newStoriesCount: 1,
    thumbnail: "/placeholder.svg?height=400&width=225&text=Zuu",
  },
]

export function useStoriesQuery({ page, pageSize }: StoriesQueryParams) {
  const [data, setData] = useState<StoryDataItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      setData(mockStories)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [page, pageSize])

  return {
    data,
    isLoading,
  }
}
