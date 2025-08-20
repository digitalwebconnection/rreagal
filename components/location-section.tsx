import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Car, Plane, Navigation, Award, Compass } from "lucide-react"
import { InquiryPopup } from "./inquiry-popup"

export function LocationSection() {
  const locationHighlights = [
    {
      icon: <MapPin className="w-6 h-6 text-amber-600" />,
      distance: "1 km",
      location: "Mankol Chowkdi",
      time: "2 mins",
      priority: "high",
    },
    {
      icon: <Car className="w-6 h-6 text-amber-600" />,
      distance: "6 km",
      location: "Sanand GIDC",
      time: "10 mins",
      priority: "high",
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-600" />,
      distance: "14 km",
      location: "Bavla Town",
      time: "20 mins",
      priority: "medium",
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-600" />,
      distance: "16 km",
      location: "Sanand Town",
      time: "25 mins",
      priority: "medium",
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-600" />,
      distance: "26 km",
      location: "Nalsarovar Bird Sanctuary",
      time: "35 mins",
      priority: "low",
    },
    {
      icon: <Plane className="w-6 h-6 text-amber-600" />,
      distance: "50 km",
      location: "SV Patel International Airport",
      time: "60 mins",
      priority: "medium",
    },
  ]

  return (
    <section id="location" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,69,19,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(160,82,45,0.06),transparent_60%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <Compass className="w-12 h-12 text-amber-600/30" />
          </div>
          <div className="inline-block bg-white/90 backdrop-blur-sm px-10 py-8 rounded-2xl shadow-xl border border-amber-200/50">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent mb-4">
              Location Advantage
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-4"></div>
            <p className="text-xl text-amber-800/80 max-w-2xl mx-auto font-medium">
              Strategically positioned where convenience meets luxury living
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden shadow-2xl border-amber-200/50 bg-white/90 backdrop-blur-sm">
              <div className="relative h-96 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8843.507851021392!2d72.2651397!3d22.9051058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ebd00617d7803%3A0xaeeb2c1b35b60a66!2sArvind%20Mankol!5e1!3m2!1sen!2sin!4v1755685664235!5m2!1sen!2sin" width="600" height="450"  loading="lazy" className=" absolute w-full h-full object-cover"></iframe>
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-amber-200/50">
                  <div className="flex items-center space-x-2">
                    <Navigation className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-semibold text-amber-800">Live Location</span>
                  </div>
                </div>
                <InquiryPopup>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                      📍 Mankol - Your Weekend Paradise
                    </div>
                  </div>
                </InquiryPopup>
              </div>
            </Card>

            <div className="mt-8 space-y-4">
              <InquiryPopup>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-4 rounded-xl font-semibold shadow-lg"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  View Location on Google Maps
                </Button>
              </InquiryPopup>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-amber-200/50 text-center">
                  <Award className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-amber-800">Prime Location</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-amber-200/50 text-center">
                  <Navigation className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-amber-800">Easy Access</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {locationHighlights.map((item, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-amber-200/50 ${item.priority === "high" ? "ring-2 ring-amber-300/50" : ""
                    }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-full ${item.priority === "high" ? "bg-gradient-to-r from-amber-100 to-orange-100" : "bg-amber-50"
                            }`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-amber-900 text-lg">{item.location}</h3>
                          <p className="text-amber-700/70 font-medium">{item.distance} away</p>
                        </div>
                      </div>
                      <div
                        className={`flex items-center px-3 py-2 rounded-full ${item.priority === "high"
                            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                            : "bg-amber-100 text-amber-800"
                          }`}
                      >
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm font-semibold">{item.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10">
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300/50 shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-amber-800 text-xl font-serif flex items-center">
                    <Navigation className="w-6 h-6 mr-3 text-amber-600" />
                    Connectivity & Surroundings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Easy access to SP Ring Road – Shantipura Circle (35 mins)",
                      "Close to schools, hospitals, malls, and restaurants within 1–20 km radius",
                      "In the vicinity of Gujarat's premier wetland, Nalsarovar Lake",
                      "Eco-tourism growth plans in the surrounding area",
                      "Direct connectivity to major industrial hubs",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-amber-800/80 font-medium text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
