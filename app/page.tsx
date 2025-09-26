import { HeroSection } from "@/components/hero-section"
import { BiodegradableStory } from "@/components/biodegradable-story"
import { HealthBenefits } from "@/components/health-benefits"
import { EnvironmentalImpact } from "@/components/environmental-impact"
import { InnovationShowcase } from "@/components/innovation-showcase"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Biodegradable Story */}
      <BiodegradableStory />

      {/* Health Benefits */}
      <HealthBenefits />

      {/* Environmental Impact */}
      <EnvironmentalImpact />

      {/* Innovation Showcase */}
      <InnovationShowcase />

      {/* Call to Action */}
      <CallToAction />
    </main>
  )
}
