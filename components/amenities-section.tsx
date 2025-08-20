import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dumbbell,
  Waves,
  Baby,
  TreePine,
  Users,
  Shield,
  Car,
  Zap,
  Droplets,
  Wifi,
  Star,
  Award,
  Crown,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export function AmenitiesSection() {
  const premiumAmenities = [
    {
      icon: <Dumbbell className="w-12 h-12 text-amber-700" />,
      title: "Elite Fitness Center",
      description: "State-of-the-art gymnasium with personal training facilities and modern equipment",
      category: "Wellness",
      premium: true,
      highlight: "24/7 Access",
    },
    {
      icon: <Waves className="w-12 h-12 text-blue-700" />,
      title: "Resort-Style Pool",
      description: "Olympic-size swimming pool with infinity edge design and poolside cabanas",
      category: "Recreation",
      premium: true,
      highlight: "Infinity Edge",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-700" />,
      title: "Grand Banquet Hall",
      description: "Elegant event space with professional catering kitchen and premium décor",
      category: "Social",
      premium: true,
      highlight: "500+ Capacity",
    },
  ]

  const essentialAmenities = [
    {
      icon: <Baby className="w-8 h-8 text-green-700" />,
      title: "Adventure Playground",
      description: "Multi-level play area with safety-certified equipment",
      category: "Family",
    },
    {
      icon: <TreePine className="w-8 h-8 text-emerald-700" />,
      title: "Botanical Gardens",
      description: "Curated landscape with meditation walkways",
      category: "Nature",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-700" />,
      title: "Smart Security System",
      description: "AI-powered surveillance with biometric access",
      category: "Security",
    },
    {
      icon: <Car className="w-8 h-8 text-gray-700" />,
      title: "Valet Parking",
      description: "Multi-level parking with EV charging stations",
      category: "Convenience",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-700" />,
      title: "Solar Power Grid",
      description: "Sustainable energy with 100% backup guarantee",
      category: "Utilities",
    },
    {
      icon: <Droplets className="w-8 h-8 text-cyan-700" />,
      title: "Pure Water System",
      description: "RO treated water with mineral enhancement",
      category: "Utilities",
    },
    {
      icon: <Wifi className="w-8 h-8 text-indigo-700" />,
      title: "Fiber Optic Network",
      description: "Gigabit internet with smart home integration",
      category: "Technology",
    },
  ]

  const lifestyleFeatures = [
    "Premium Club House with Concierge Services",
    "Temperature Controlled Swimming Pool",
    "Professional Landscaping & Garden Maintenance",
    "24x7 Power Backup & Water Supply",
    "Dedicated Visitor Parking Areas",
    "CCTV Surveillance & Security Personnel",
  ]

  return (
    <section
      id="amenities"
      className="py-24 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-stone-200/30 to-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=60&width=60')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-amber-200 shadow-lg">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="font-serif">Luxury Living Redefined</span>
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="block font-serif text-amber-800 text-3xl sm:text-4xl mb-2">Amenities That</span>
            <span className="bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800 bg-clip-text text-transparent">
              Upgrade Your
            </span>
            <br />
            <span className="font-serif italic text-stone-800">Lifestyle</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover a world of unparalleled luxury where every amenity is thoughtfully designed to enhance your daily
              experience and create lasting memories
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-amber-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>24/7 Maintenance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>World-Class Standards</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
              <Crown className="w-8 h-8 text-amber-600 fill-current" />
              <h3 className="text-3xl font-bold text-gray-900 font-serif">Signature Collection</h3>
              <Crown className="w-8 h-8 text-amber-600 fill-current" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Exclusive premium amenities that define luxury living at its finest
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {premiumAmenities.map((amenity, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative bg-white border-2 border-amber-200 hover:border-amber-400 transition-all duration-500 transform hover:-translate-y-3 shadow-2xl hover:shadow-3xl rounded-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-bl-full"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold px-3 py-1 shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Premium
                    </Badge>
                  </div>

                  <CardHeader className="text-center pb-6 pt-12 px-8">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-inner border border-amber-100">
                          {amenity.icon}
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {amenity.highlight}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-3">{amenity.title}</CardTitle>
                    <Badge variant="outline" className="text-amber-700 border-amber-300 bg-amber-50 font-medium">
                      {amenity.category}
                    </Badge>
                  </CardHeader>

                  <CardContent className="text-center px-8 pb-8">
                    <p className="text-gray-600 leading-relaxed mb-6">{amenity.description}</p>
                    <Button
                      variant="outline"
                      className="border-amber-300 text-amber-700 hover:bg-amber-50 group/btn bg-transparent"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/30 via-stone-200/30 to-amber-200/30 rounded-full blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border-2 border-amber-200 rounded-full px-8 py-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
                  <Star className="w-6 h-6 text-amber-600 fill-current animate-pulse" />
                  <h3 className="text-3xl font-bold text-gray-900 font-serif tracking-wide">
                    Essential Lifestyle Features
                  </h3>
                  <Star className="w-6 h-6 text-amber-600 fill-current animate-pulse" />
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-serif italic">
              Comprehensive amenities designed with classical elegance for your comfort and convenience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {essentialAmenities.map((amenity, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-300/50 via-stone-300/30 to-amber-400/50 rounded-none opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm"></div>

                <Card className="relative bg-gradient-to-br from-white via-stone-50 to-amber-50/30 border-2 border-stone-300 hover:border-amber-400 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 shadow-lg hover:shadow-2xl rounded-none group-hover:bg-gradient-to-br group-hover:from-amber-50 group-hover:via-white group-hover:to-stone-50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-amber-600 opacity-60"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-amber-600 opacity-60"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-amber-600 opacity-60"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-amber-600 opacity-60"></div>

                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=40&width=40')] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>

                  <CardHeader className="text-center pb-4 pt-10 relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="relative group/icon">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-stone-200 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-500 scale-110"></div>
                        <div className="relative p-5 bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100 border-2 border-stone-300 group-hover:border-amber-400 transition-all duration-500 shadow-inner group-hover:shadow-lg transform group-hover:scale-110 group-hover:rotate-12 rounded-full">
                          <div className="transform group-hover/icon:scale-110 transition-transform duration-300">
                            {amenity.icon}
                          </div>
                        </div>
                        <div className="absolute inset-0 border-2 border-amber-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                      </div>
                    </div>

                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 font-serif tracking-wide group-hover:text-amber-800 transition-colors duration-300">
                      {amenity.title}
                    </CardTitle>

                    <div className="relative inline-block">
                      <Badge className="bg-gradient-to-r from-stone-200 to-amber-200 text-stone-700 border-2 border-stone-300 font-semibold px-4 py-1 rounded-none shadow-sm group-hover:from-amber-200 group-hover:to-stone-200 group-hover:border-amber-400 transition-all duration-300">
                        {amenity.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="text-center px-6 pb-8 relative z-10">
                    <p className="text-gray-600 text-sm leading-relaxed font-serif group-hover:text-gray-700 transition-colors duration-300">
                      {amenity.description}
                    </p>

                    <div className="mt-4 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-r from-stone-100 to-amber-100 rounded-3xl p-12 border border-amber-200 shadow-xl">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Additional Lifestyle Features</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every detail thoughtfully planned to enhance your living experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifestyleFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/70 rounded-xl p-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-amber-900 via-orange-900 to-stone-900 rounded-3xl p-16 max-w-7xl mx-auto text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-orange-400/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                <Award className="w-10 h-10 text-amber-300" />
                <h3 className="text-4xl font-bold font-serif">Strategic Investment Advantages</h3>
                <Award className="w-10 h-10 text-amber-300" />
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
              </div>

              <p className="text-2xl text-amber-100 mb-12 max-w-4xl mx-auto font-light">
                Prime location benefits that guarantee exceptional returns and long-term value appreciation
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-amber-300" />
                    <h4 className="font-bold text-amber-300 text-xl">Infrastructure Excellence</h4>
                  </div>
                  <p className="text-amber-100 leading-relaxed text-lg">
                    Sanand Industrial Corridor expansion and State Highway connectivity driving unprecedented regional
                    growth
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <TreePine className="w-6 h-6 text-amber-300" />
                    <h4 className="font-bold text-amber-300 text-xl">Future Connectivity</h4>
                  </div>
                  <p className="text-amber-100 leading-relaxed text-lg">
                    Proposed 3rd Ring Road (20 km) & 60m wide Sanand Bypass ensuring seamless accessibility
                  </p>
                </div>
              </div>

              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <span>Discover Investment Potential</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
