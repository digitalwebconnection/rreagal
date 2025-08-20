import { Button } from "@/components/ui/button"
import { MapPin, Home, Crown } from "lucide-react"

export function PricingSection() {
  const pricingPlans = [
    {
      title: "Premium Plots",
      price: "₹35 Lacs",
      period: "onwards*",
      icon: MapPin,
      features: [
        "Multiple sizes available",
        "Vastu-compliant plots",
        "Clear title documents",
        "Flexible payment plans",
        "Direct highway access",
      ],
      popular: false,
    },
    {
      title: "Villa Plots",
      price: "₹45 Lacs",
      period: "onwards*",
      icon: Home,
      features: [
        "Larger plot sizes",
        "Premium location",
        "Ready infrastructure",
        "Club membership included",
        "Priority booking",
      ],
      popular: true,
    },
    {
      title: "Corner Plots",
      price: "₹55 Lacs",
      period: "onwards*",
      icon: Crown,
      features: [
        "Corner positioning",
        "Maximum privacy",
        "Better ventilation",
        "Higher appreciation",
        "Exclusive amenities",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-amber-50/30 to-orange-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-serif text-amber-900 mb-2 relative">
              Investment Options
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600"></div>
            </h2>
          </div>
          <p className="text-lg text-amber-800/80 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
            Discover exceptional investment opportunities with our carefully curated selection of premium plots and
            villas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <div key={index} className={`group relative ${plan.popular ? "lg:-mt-4" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-8 z-10">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 text-sm font-medium tracking-wide">
                      MOST PREFERRED
                      <div className="absolute top-full left-0 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-amber-700"></div>
                      <div className="absolute top-full right-0 w-0 h-0 border-r-[12px] border-r-transparent border-t-[12px] border-t-amber-700"></div>
                    </div>
                  </div>
                )}

                <div
                  className={`bg-white rounded-none border-2 ${plan.popular ? "border-amber-600 shadow-xl" : "border-amber-200"} 
                  transition-all duration-300 group-hover:shadow-lg group-hover:border-amber-400 h-full`}
                >
                  <div className="p-8 border-b border-amber-100">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`p-4 rounded-full ${plan.popular ? "bg-amber-600" : "bg-amber-100"}`}>
                        <IconComponent className={`w-8 h-8 ${plan.popular ? "text-white" : "text-amber-600"}`} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif text-amber-900 text-center mb-6">{plan.title}</h3>
                    <div className="text-center">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-amber-900">{plan.price}</span>
                        <span className="text-amber-700 ml-2 text-lg">{plan.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-amber-800 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full py-3 rounded-none font-medium tracking-wide transition-all duration-300 ${
                        plan.popular
                          ? "bg-amber-600 hover:bg-amber-700 text-white"
                          : "bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                      }`}
                    >
                      VIEW DETAILS
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm border border-amber-200 rounded-lg p-8 max-w-4xl mx-auto">
            <p className="text-amber-800/80 mb-6 text-lg">*Prices subject to change. Limited time pre-launch offer.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-none font-medium tracking-wide"
              >
                SCHEDULE SITE VISIT
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-none font-medium tracking-wide"
              >
                DOWNLOAD BROCHURE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
