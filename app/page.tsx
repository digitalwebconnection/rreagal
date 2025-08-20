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
import FloatingWhatsApp from "@/components/FloatingWhatsApp"  // 👈 import here

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
        <GallerySection />
        <SitePlanSection />
        <AmenitiesSection />
        <LocationSection />
        <InquiryForm />
        <PrivacyPolicy />
      </main>
      <Footer />

      {/* 👇 WhatsApp floating button */}
      <FloatingWhatsApp />
    </div>
  )
}
