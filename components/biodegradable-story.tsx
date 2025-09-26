"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Globe, Recycle } from "lucide-react"

export function BiodegradableStory() {
  return (
    <section id="about-section" className="w-full py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-8">Pioneering Sustainable Fashion in Morocco</h2>
          <p className="text-xl text-gray-300 mb-6">
            Basix is breaking new ground as Morocco's first biodegradable clothing brand. We're not just making
            clothes—we're creating a movement towards a more sustainable future.
          </p>
          <p className="text-lg text-green-300 font-medium">
            Every thread tells a story of innovation, sustainability, and care for both you and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-dark-700 border-green-500/20 hover:border-green-500/40 transition-colors">
            <CardContent className="p-6 text-center">
              <Leaf className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-3">100% Biodegradable</h3>
              <p className="text-gray-400">
                Our fabrics completely decompose naturally, leaving zero environmental footprint.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-dark-700 border-green-500/20 hover:border-green-500/40 transition-colors">
            <CardContent className="p-6 text-center">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Skin-Friendly</h3>
              <p className="text-gray-400">
                Hypoallergenic materials that are gentle on sensitive skin and promote natural breathability.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-dark-700 border-green-500/20 hover:border-green-500/40 transition-colors">
            <CardContent className="p-6 text-center">
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Morocco First</h3>
              <p className="text-gray-400">
                Proudly pioneering sustainable fashion in Morocco with traditional craftsmanship.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-dark-700 border-green-500/20 hover:border-green-500/40 transition-colors">
            <CardContent className="p-6 text-center">
              <Recycle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Circular Design</h3>
              <p className="text-gray-400">
                From creation to decomposition, every step is designed with sustainability in mind.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
