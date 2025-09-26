"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function InnovationShowcase() {
  return (
    <section className="w-full py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-16">Innovation Meets Tradition</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Modular Biodegradable Design</h3>
            <p className="text-gray-300 mb-4">
              Our revolutionary approach combines Morocco's rich textile heritage with cutting-edge biodegradable
              technology. Each piece is designed with modularity in mind—allowing for maximum customization while
              maintaining our commitment to environmental sustainability.
            </p>
            <p className="text-gray-300 mb-6">
              From the inner layers to exterior elements, every component is crafted from 100% biodegradable materials
              that are gentle on your skin and kind to the planet.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">Learn About Our Process</Button>
          </div>

          <div className="relative aspect-square">
            <Image
              src="/design-concept-1.jpg"
              alt="Basix modular biodegradable design"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-dark-700 border-green-500/20">
            <CardContent className="p-6">
              <div className="relative aspect-square mb-4">
                <Image
                  src="/design-concept-2.jpg"
                  alt="Customizable biodegradable elements"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-100 mb-2">Eco-Modular System</h4>
              <p className="text-gray-400 text-sm">
                Every component—from pockets to panels—is made from biodegradable materials that customize to your
                style.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-dark-700 border-green-500/20">
            <CardContent className="p-6">
              <div className="relative aspect-square mb-4">
                <Image
                  src="/design-concept-4.jpg"
                  alt="Sustainable color variations"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-100 mb-2">Natural Dyes</h4>
              <p className="text-gray-400 text-sm">
                Our colors come from plant-based dyes that are safe for your skin and biodegradable.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-dark-700 border-green-500/20">
            <CardContent className="p-6">
              <div className="relative aspect-square mb-4">
                <Image
                  src="/design-concept-5.jpg"
                  alt="Skin-friendly construction"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-100 mb-2">Skin-Safe Construction</h4>
              <p className="text-gray-400 text-sm">
                Every stitch and seam is designed to be gentle on sensitive skin while maintaining durability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
