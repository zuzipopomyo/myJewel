export interface User {
  id: string
  firstName: string
  lastName: string
  username?: string
  profileImage: string | null
  isVerified?: boolean
}

export interface StoryInfo {
  id: string
  mediaPath: string
  mediaType: "IMAGE" | "VIDEO"
  durationInSeconds: number
}

export interface StoryDataItem {
  user: User
  infos: StoryInfo[]
  timeAgo: string
  hasNewStory?: boolean
  newStoriesCount?: number
  isSponsored?: boolean
  thumbnail?: string
}

export interface StoriesQueryParams {
  page: number
  pageSize: number
}
