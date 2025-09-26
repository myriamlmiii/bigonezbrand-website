"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Wind, Droplets, Sun } from "lucide-react"

export function HealthBenefits() {
  return (
    <section className="w-full py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-8">Good for Your Skin, Great for Your Health</h2>
          <p className="text-xl text-gray-300 mb-6">
            Our biodegradable fabrics aren't just environmentally conscious—they're designed with your wellbeing in
            mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Why Your Skin Will Love Basix</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-100 mb-2">Hypoallergenic Protection</h4>
                  <p className="text-gray-400">
                    Natural fibers that reduce skin irritation and allergic reactions, perfect for sensitive skin.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Wind className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-100 mb-2">Superior Breathability</h4>
                  <p className="text-gray-400">
                    Enhanced airflow prevents moisture buildup, keeping your skin dry and comfortable all day.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Droplets className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-100 mb-2">Moisture Management</h4>
                  <p className="text-gray-400">
                    Natural wicking properties help regulate body temperature and prevent bacterial growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Sun className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-100 mb-2">UV Protection</h4>
                  <p className="text-gray-400">
                    Natural UV-blocking properties help protect your skin from harmful sun exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border-green-500/30">
            <CardContent className="p-8">
              <h4 className="text-2xl font-semibold text-gray-100 mb-6 text-center">Health Benefits</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Reduces Skin Irritation</span>
                  <span className="text-green-400 font-semibold">✓ 95%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Improves Breathability</span>
                  <span className="text-green-400 font-semibold">✓ 90%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Antimicrobial Properties</span>
                  <span className="text-green-400 font-semibold">✓ 85%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Comfort Rating</span>
                  <span className="text-green-400 font-semibold">✓ 98%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
