"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TreePine, Waves, Factory, Clock } from "lucide-react"

export function EnvironmentalImpact() {
  return (
    <section className="w-full py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-8">Revolutionary Environmental Impact</h2>
          <p className="text-xl text-gray-300 mb-6">
            Traditional clothing can take up to 200 years to decompose. Our biodegradable fabrics return to earth in
            just 6 months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-dark-700 border-green-500/20 text-center">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-400 mb-2">6 Months</div>
              <p className="text-gray-400">Complete biodegradation time</p>
            </CardContent>
          </Card>

          <Card className="bg-dark-700 border-blue-500/20 text-center">
            <CardContent className="p-6">
              <Waves className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-400 mb-2">0%</div>
              <p className="text-gray-400">Microplastic pollution</p>
            </CardContent>
          </Card>

          <Card className="bg-dark-700 border-purple-500/20 text-center">
            <CardContent className="p-6">
              <Factory className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-400 mb-2">-70%</div>
              <p className="text-gray-400">Carbon footprint reduction</p>
            </CardContent>
          </Card>

          <Card className="bg-dark-700 border-green-500/20 text-center">
            <CardContent className="p-6">
              <TreePine className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <p className="text-gray-400">Natural fiber composition</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-green-500/20">
          <h3 className="text-2xl font-semibold text-gray-100 mb-6 text-center">The Basix Difference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-red-400 mb-4">Traditional Clothing</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Takes 200+ years to decompose</li>
                <li>• Releases microplastics</li>
                <li>• High water consumption</li>
                <li>• Chemical-heavy production</li>
                <li>• Contributes to landfill waste</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-green-400 mb-4">Basix Biodegradable</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Decomposes in 6 months</li>
                <li>• Zero microplastic pollution</li>
                <li>• Minimal water usage</li>
                <li>• Chemical-free processes</li>
                <li>• Enriches soil when composted</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
