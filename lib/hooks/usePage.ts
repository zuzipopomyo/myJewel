"use client"

import { useState, useEffect } from "react"

export default function usePage() {
  const [page, setPage] = useState(1)

  useEffect(() => {
    // You can add any logic here to determine the page number
    // For example, you can read it from the URL query parameters
    // or from a global state management solution

    // For now, we'll just set it to 1
    setPage(1)
  }, [])

  return [page, setPage] as const
}
