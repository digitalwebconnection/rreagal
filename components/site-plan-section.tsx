import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Ruler, TreePine, Car, Shield, Zap, Droplets, Users } from "lucide-react"

export function SitePlanSection() {
  const siteFeatures = [
    {
      icon: <MapPin className="w-8 h-8 text-amber-700" />,
      title: "Strategic Location",
      description: "On State Highway SH-74, connected to Sanand–Nalsarovar Road",
      metric: "1 km from Mankol Chowkdi",
    },
    {
      icon: <Ruler className="w-8 h-8 text-amber-700" />,
      title: "Plot Sizes",
      description: "Multiple sizes available from 1000 sq ft to 3000 sq ft",
      metric: "15+ Plot Options",
    },
    {
      icon: <TreePine className="w-8 h-8 text-amber-700" />,
      title: "Green Spaces",
      description: "40% open space with landscaped gardens and parks",
      metric: "40% Green Cover",
    },
    {
      icon: <Car className="w-8 h-8 text-amber-700" />,
      title: "Wide Roads",
      description: "30ft and 40ft wide internal roads for easy connectivity",
      metric: "30-40ft Roads",
    },
  ]

  const infrastructureFeatures = [
    { icon: <Shield className="w-6 h-6" />, title: "24/7 Security", desc: "CCTV & Gated Community" },
    { icon: <Zap className="w-6 h-6" />, title: "Underground Utilities", desc: "Power & Cable Lines" },
    { icon: <Droplets className="w-6 h-6" />, title: "Water Management", desc: "Rainwater Harvesting" },
    { icon: <Users className="w-6 h-6" />, title: "Community Center", desc: "Recreation Facilities" },
  ]

  return (
    <section id="site-plan" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Master Planned Development
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Thoughtfully Designed
            <span className="block text-amber-700 font-serif italic">Master Site Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A meticulously planned layout combining modern infrastructure with sustainable living, designed to create a
            harmonious community for generations to come.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-amber-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700">50+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Premium Plots</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700">40%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Green Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700">24/7</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Security</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700">100%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Vastu Compliant</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Professional frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 to-orange-200 rounded-2xl opacity-20"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-2xl">
                <div className="relative rounded-lg overflow-hidden ">
                  <img
                    src="/monakal.jpg"
                    alt="Mankol Master Site Plan"
                    className="w-full h-150"
                  />
                  {/* Professional overlay with compass */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-xs font-semibold text-gray-700 mb-1">NORTH</div>
                    <div className="w-8 h-8 border-2 border-amber-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-amber-600"></div>
                    </div>
                  </div>

                  {/* Scale indicator */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-xs font-semibold text-gray-700 mb-1">SCALE</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-1 bg-gray-800"></div>
                      <span className="text-xs text-gray-600">1:500</span>
                    </div>
                  </div>
                </div>

                {/* Professional title plate */}
                <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-gray-900 text-lg">MANKOL RESIDENCY</h3>
                  <p className="text-sm text-gray-600">Master Development Plan - Phase I</p>
                  <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                    <span>Drawing No: MP-001</span>
                    <span>Rev: A</span>
                    <span>Date: 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {siteFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        {feature.icon}
                        <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-amber-700">{feature.metric}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="w-6 h-6 text-amber-700 mr-3" />
                Infrastructure Excellence
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {infrastructureFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-amber-50 transition-colors"
                  >
                    <div className="text-amber-700 mt-1">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                      <div className="text-xs text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3" />
                Premium Advantages
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                  <span className="text-amber-100">Just 1 km from Mankol Chowkdi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                  <span className="text-amber-100">Direct access to SG Highway, Sanand GIDC, & Airport</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                  <span className="text-amber-100">Vastu-compliant plot orientations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                  <span className="text-amber-100">Underground utilities and drainage system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                  <span className="text-amber-100">Gated community with 24/7 security</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-amber-600">
                <Button size="lg" variant="secondary" className="flex-1 bg-white text-amber-700 hover:bg-amber-50">
                  Download Site Plan
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-white text-white hover:bg-white hover:text-amber-700 bg-transparent"
                >
                  Schedule Site Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
