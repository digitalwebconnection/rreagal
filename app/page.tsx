import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PricingSection } from "@/components/pricing-section"
import { SitePlanSection } from "@/components/site-plan-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { GallerySection } from "@/components/gallery-section"
import { LocationSection } from "@/components/location-section"
import { InquiryForm } from "@/components/inquiry-form"
import PrivacyPolicy from "@/components/privacy-policy"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
        <SitePlanSection />
        <AmenitiesSection />
        <GallerySection />
        <LocationSection />
        <InquiryForm />
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  )
}
