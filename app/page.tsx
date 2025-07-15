"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Process from "@/components/Process"
import WhyChoose from "@/components/WhyChoose"
import ExploreMore from "@/components/ExploreMore"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Process />
      <WhyChoose />
      <ExploreMore />
      <Testimonials />
      <Footer />
    </main>
  )
}
