// components/Testimonials.tsx
interface User {
  id: number
  name: string
  username: string
  email: string
}

interface Comment {
  id: number
  name: string
  email: string
  body: string
}

// Fallback testimonials in case the remote API is rate-limited
const FALLBACK = [
  {
    id: 1,
    name: "Amelia R.",
    username: "amelia_r",
    testimonial: "Absolutely breathtaking! My engagement ring is everything I dreamed of and more.",
    avatar: "/placeholder.svg?height=80&width=80&text=A",
  },
  {
    id: 2,
    name: "Stephen L.",
    username: "stephenl89",
    testimonial: "From design to delivery the service was flawless – highly recommend MyJewel.",
    avatar: "/placeholder.svg?height=80&width=80&text=S",
  },
  {
    id: 3,
    name: "Natalie G.",
    username: "natg",
    testimonial: "Every detail is perfect. I’ve never had a piece of jewellery feel this personal.",
    avatar: "/placeholder.svg?height=80&width=80&text=N",
  },
  {
    id: 4,
    name: "Daniel W.",
    username: "dwatches",
    testimonial: "Knowledgeable staff, quick replies, and an amazing custom necklace – thank you!",
    avatar: "/placeholder.svg?height=80&width=80&text=D",
  },
]

async function getTestimonials() {
  try {
    const [usersRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users?_limit=4", {
        next: { revalidate: 60 * 60 * 6 }, // 6-hour cache
      }),
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=4", {
        next: { revalidate: 60 * 60 * 6 },
      }),
    ])

    if (!usersRes.ok || !commentsRes.ok) {
      throw new Error("Remote API returned an error status")
    }

    const users: User[] = await usersRes.json()
    const comments: Comment[] = await commentsRes.json()

    return users.map((user, index) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      testimonial: comments[index]?.body || "Amazing service and beautiful jewelry – will buy again!",
      avatar: `/placeholder.svg?height=80&width=80&text=${user.name.charAt(0)}`,
    }))
  } catch (error) {
    console.error("Failed to fetch testimonials:", error)
    return FALLBACK
  }
}

export default async function Testimonials() {
  const testimonials = await getTestimonials()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900">Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img
                src={t.avatar || "/placeholder.svg"}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-medium text-gray-900 mb-2">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-4">@{t.username}</p>
              <p className="text-gray-600 text-sm">“{t.testimonial.substring(0, 100)}…”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
