"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function CallToAction() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-8">Join the Biodegradable Revolution</h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of Morocco's sustainable fashion movement. Experience clothing that's good for you and great for the
            planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Start Your Custom Order
            </Button>
            <Button size="lg" variant="outline">
              Download Our Sustainability Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-dark-700 border-green-500/20">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Email Us</h3>
              <p className="text-gray-400">hello@basixmorocco.com</p>
            </CardContent>
          </Card>

          <Card className="bg-dark-700 border-green-500/20">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Call Us</h3>
              <p className="text-gray-400">+212 XXX XXX XXX</p>
            </CardContent>
          </Card>

          <Card className="bg-dark-700 border-green-500/20">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Visit Us</h3>
              <p className="text-gray-400">Casablanca, Morocco</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
