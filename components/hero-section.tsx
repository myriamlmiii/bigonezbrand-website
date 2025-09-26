"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const images = [
  "https://64.media.tumblr.com/db8472cfbb89a155148003b053d5f3de/4d6d987e0cee7307-8e/s400x225/158142e8e876044a6191733a02f6ee5ac1643b58.gif",
  "https://i.pinimg.com/originals/14/f4/35/14f435eaaf8d107cca5055ce150eaf47.gif",
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleDiscoverClick = () => {
    const aboutSection = document.getElementById("about-section")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Banner ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl text-gray-100 mb-6">
            Morocco's First
            <span className="block text-green-400">Biodegradable</span>
            Clothing Brand
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Revolutionary eco-friendly fashion that's gentle on your skin and kind to our planet
          </p>
          <p className="text-lg text-green-300 mb-8 font-medium">
            100% Biodegradable • Skin-Safe • Sustainably Crafted in Morocco
          </p>
          <Button onClick={handleDiscoverClick} size="lg" className="bg-green-600 hover:bg-green-700">
            DISCOVER THE REVOLUTION
          </Button>
        </div>
      </div>
    </div>
  )
}
