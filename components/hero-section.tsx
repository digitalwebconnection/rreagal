import { Button } from "@/components/ui/button"
import { MapPin, Phone, Download, Star, Award, Shield } from "lucide-react"
import { InquiryPopup } from "./inquiry-popup"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/heroimg.jpg"
          alt=""
          className=" w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/40 via-amber-800/40 to-amber-700/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="flex items-center mb-6">
              <div className="bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2 flex items-center">
                <Award className="w-4 h-4 mr-2 text-black" />
                <span className="text-sm font-medium text-black">Premium Real Estate</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Discover Your
              <span className="block text-black/80 font-lg italic">Dream Paradise</span>
              {/* <span className="block text-4xl sm:text-5xl lg:text-6xl font-light">at Mankol</span> */}
            </h1>

            <p className="text-xl sm:text-2xl mb-6 text-white font-semibold  leading-relaxed">
              Exclusive collection of premium plots & luxury villas in Mankol's most coveted location
            </p>

            <div className="bg-white/90 backdrop-blur-sm border border-amber-400/30 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black/80 mb-1">Starting Investment</p>
                  <p className="text-3xl font-bold text-black/80">₹35 Lacs*</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-black/80 mb-1">Pre-Launch Offer</p>
                  <p className="text-lg font-semibold text-black">Limited Time</p>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-8 text-amber-100">
              <MapPin className="w-5 h-5 mr-3 text-black/80" />
              <span className="text-lg">State Highway Location • Prime Connectivity • High Growth Zone</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <InquiryPopup>
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Site Visit
                </Button>
              </InquiryPopup>
              <InquiryPopup>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-300 text-black/80 hover:bg-amber-300 hover:text-amber-900 bg-transparent font-semibold px-8 py-4 text-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get Brochure
                </Button>
              </InquiryPopup>
            </div>

            <div className="flex items-center space-x-6 text-black/80">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-lg" >RERA Approved</span>
              </div>
              {/* <div className="flex items-center">
                <Star className="w-4 h-4 mr-2" />
                <span className="text-sm">0% Brokerage</span>
              </div> */}
            </div>
          </div>

          <div className="lg:block hidden">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-bold text-amber-900  mb-2">₹35L+</h3>
                <p className="text-amber-700 font-medium">Starting Price</p>
                <p className="text-sm text-amber-800 mt-1">Pre-launch exclusive</p>
              </div>

              <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-bold text-amber-900  mb-2">Prime</h3>
                <p className="text-amber-700 font-medium">Location</p>
                <p className="text-sm text-amber-800 mt-1">High growth potential</p>
              </div>

              <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-bold text-amber-900  mb-2">100%</h3>
                <p className="text-amber-700 font-medium">Transparency</p>
                <p className="text-sm text-amber-800 mt-1">Direct developer sales</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12 lg:hidden">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center">
            <h3 className="font-bold text-lg mb-1 text-amber-300">₹35L+</h3>
            <p className="text-xs text-amber-200">Starting Price</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center">
            <h3 className="font-bold text-lg mb-1 text-amber-300">Prime</h3>
            <p className="text-xs text-amber-200">Location</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center">
            <h3 className="font-bold text-lg mb-1 text-amber-300">0%</h3>
            <p className="text-xs text-amber-200">Brokerage</p>
          </div>
        </div>
      </div>
    </section>
  )
}
